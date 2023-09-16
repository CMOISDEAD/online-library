import instance from "./api";

export const getAllAuthors = async () => {
  const res = await instance.get("author");
  return res.data;
};
