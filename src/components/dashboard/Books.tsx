import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { getAllAuthors } from "../../api/author";
import { useEffect, useState } from "react";
import { getAllCategories } from "../../api/category";
import { getAllBooks, removeBook, saveBook } from "../../api/book";
import { notify } from "../../utils/notify";
import { PiEye, PiPencil, PiTrash } from "react-icons/pi";

export const Books = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    (async () => {
      try {
        setAuthors(await getAllAuthors());
        setCategories(await getAllCategories());
        setBooks(await getAllBooks());
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const handleAdd = async (data: any) => {
    try {
      await saveBook(data);
      notify({
        content: "added successfully",
        type: "success",
      });
      setBooks(await getAllBooks());
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await removeBook(id);
      notify({
        content: "removed successfully",
        type: "success",
      });
      setBooks(await getAllBooks());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Card className="border border-divider">
        <CardHeader>
          <h1 className="text-3xl font-bold capitalize">Books</h1>
        </CardHeader>
        <CardBody>
          <form
            onSubmit={handleSubmit(handleAdd)}
            className="flex flex-col gap-4"
          >
            <Input
              {...register("title", { required: true })}
              type="text"
              label="Title"
              variant="bordered"
              color={errors.title ? "danger" : "default"}
              errorMessage={errors.title && "Please enter a valid title"}
            />
            <Input
              {...register("cover", { required: true })}
              type="text"
              label="Cover"
              variant="bordered"
              color={errors.cover ? "danger" : "default"}
              errorMessage={errors.cover && "Please enter a valid cover url"}
            />
            <Select
              label="author"
              {...register("authorId", { required: true })}
              color={errors.authorId ? "danger" : "default"}
              errorMessage={errors.authorId && "Please enter a valid author"}
            >
              {authors.map((author: any) => (
                <SelectItem
                  key={author.id.toString()}
                  value={author.id}
                  textValue={`${author.firstName} ${author.lastName}`}
                >
                  {author.firstName} {author.lastName}
                </SelectItem>
              ))}
            </Select>
            <Select
              label="Categories"
              selectionMode="multiple"
              {...register("categoryIDs", { required: true })}
              color={errors.categoryIDs ? "danger" : "default"}
              errorMessage={
                errors.categoryIDs && "Please enter a valid category"
              }
            >
              {categories.map((category: any) => (
                <SelectItem
                  key={category.id.toString()}
                  value={category.id}
                  textValue={`${category.name}`}
                >
                  {category.name}
                </SelectItem>
              ))}
            </Select>
            <Input
              {...register("description", { required: true })}
              type="text"
              label="Description"
              variant="bordered"
              color={errors.description ? "danger" : "default"}
              errorMessage={
                errors.description && "Please enter a valid description"
              }
            />
            <Input
              {...register("published", { required: true })}
              type="text"
              label="Published"
              variant="bordered"
              color={errors.published ? "danger" : "default"}
              errorMessage={
                errors.published && "Please enter a valid published"
              }
            />
            <Input
              {...register("price", { required: true })}
              type="text"
              label="Price"
              variant="bordered"
              color={errors.price ? "danger" : "default"}
              errorMessage={errors.price && "Please enter a valid price"}
            />
            <Input
              {...register("numberPages", { required: true })}
              type="text"
              label="Number of Pages"
              variant="bordered"
              color={errors.numberPages ? "danger" : "default"}
              errorMessage={
                errors.numberPages && "Please enter a valid number of pages"
              }
            />
            <Input
              {...register("format", { required: true })}
              type="text"
              label="Format"
              variant="bordered"
              color={errors.format ? "danger" : "default"}
              errorMessage={errors.format && "Please enter a valid format"}
            />
            <Input
              {...register("language", { required: true })}
              type="text"
              label="Language"
              variant="bordered"
              color={errors.language ? "danger" : "default"}
              errorMessage={errors.language && "Please enter a valid language"}
            />
            <Button color="primary" type="submit">
              Add
            </Button>
          </form>
        </CardBody>
      </Card>
      <Table aria-label="Book list">
        <TableHeader>
          <TableColumn>title</TableColumn>
          <TableColumn>author</TableColumn>
          <TableColumn>categories</TableColumn>
          <TableColumn>date</TableColumn>
          <TableColumn>format</TableColumn>
          <TableColumn>actions</TableColumn>
        </TableHeader>
        <TableBody emptyContent="No books to display.">
          {books.map((book: any, i) => (
            <TableRow key={i}>
              <TableCell>{book.title}</TableCell>
              <TableCell>
                {book.author.firstName} {book.author.lastName}
              </TableCell>
              <TableCell>
                {book.categories.map((category: any, i: number) => (
                  <span key={i}>{category.name}, </span>
                ))}
              </TableCell>
              <TableCell>{book.published}</TableCell>
              <TableCell>{book.format}</TableCell>
              <TableCell>
                <div className="relative flex items-center gap-2">
                  <Tooltip content="Details">
                    <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
                      <PiEye />
                    </span>
                  </Tooltip>
                  <Tooltip content="Edit Book">
                    <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
                      <PiPencil />
                    </span>
                  </Tooltip>
                  <Tooltip color="danger" content="Delete Book">
                    <span
                      className="cursor-pointer text-lg text-danger active:opacity-50"
                      onClick={() => handleDelete(book.id)}
                    >
                      <PiTrash />
                    </span>
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
