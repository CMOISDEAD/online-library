import instance from "./api";

export const getAllCategories = async () => {
  const res = await instance.get("category");
  return res.data;
};
