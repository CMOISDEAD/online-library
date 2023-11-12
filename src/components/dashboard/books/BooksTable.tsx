import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import { PiEye, PiPencil, PiTrash } from "react-icons/pi";
import { getAllBooks, removeBook } from "../../../api/book";
import { notify } from "../../../utils/notify";
import useLibraryStore from "../../../store/store";

export const BooksTable = () => {
  const books = useLibraryStore((state) => state.books);

  const handleDelete = async (id: string) => {
    try {
      await removeBook(id);
      notify({
        content: "removed successfully",
        type: "success",
      });
      const data = await getAllBooks();
      useLibraryStore.setState({ books: data });
    } catch (error) {
      console.error(error);
    }
  };

  return (
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
  );
};
