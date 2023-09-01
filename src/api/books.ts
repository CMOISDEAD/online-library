import instance from "./api";
import { SEARCH } from "./endpoints";

export const searchBooks = async (book: string) => {
  const res = await instance.get(SEARCH, {
    params: {
      title: book,
    },
  });

  return res.data;
};
