import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { getAllAuthors } from "../../api/author";
import { useEffect, useState } from "react";
import { getAllCategories } from "../../api/category";
import { saveBook } from "../../api/book";
import { notify } from "../../utils/notify";

export const Books = () => {
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
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const handleBook = async (data: any) => {
    try {
      const response = await saveBook(data);
      notify({
        content: `${response.title} added successfully`,
        type: "success",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card isBlurred className="border border-divider">
      <CardHeader>
        <h1 className="text-3xl font-bold capitalize">Books</h1>
      </CardHeader>
      <CardBody>
        <form
          onSubmit={handleSubmit(handleBook)}
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
            errorMessage={errors.categoryIDs && "Please enter a valid category"}
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
            errorMessage={errors.published && "Please enter a valid published"}
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
  );
};
