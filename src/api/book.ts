import instance from "./api";

export const getAllBooks = async () => {
  const res = await instance.get("book");

  return res.data;
};
