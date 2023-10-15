// @ts-ignore
import { v4 as uuidv4 } from "uuid";
import instance from "./api";

export const getAllBooks = async () => {
  try {
    const res = await instance.get("book");
    return res.data;
  } catch (error) {
    console.error(error);
  }
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

export const removeBook = async (id: string) => {
  try {
    const res = await instance.delete(`book/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
