// @ts-ignore
import { v4 as uuidv4 } from "uuid";
import instance from "./api";

export const getAllBooks = async () => {
  const res = await instance.get("book");
  return res.data;
};

export const saveBook = async (book: any) => {
  book = {
    ...book,
    isbn: uuidv4(),
    price: parseFloat(book.price),
    numberPages: parseInt(book.numberPages),
    categoryIDs: book.categoryIDs.split(","),
  };
  const res = await instance.post("book", book);
  return res.data;
};
