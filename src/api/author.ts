// @ts-ignore
import { v4 as uuidv4 } from "uuid";
import instance from "./api";

export const getAllAuthors = async () => {
  const res = await instance.get("/author");
  return res.data;
};

export const saveAuthor = async (author: any) => {
  const res = await instance.post("/author", author);
  return res.data;
};
