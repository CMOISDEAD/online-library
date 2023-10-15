import instance from "./api";

export const getAllCategories = async () => {
  const res = await instance.get("category");
  return res.data;
};

export const createCategory = async (category: any) => {
  try {
    const res = await instance.post("category", category);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
