import instance from "./api";

export const getReviews = async (bookId: string) => {
  try {
    const response = await instance.get(`/reviews/${bookId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createReview = async (review: any) => {
  try {
    const response = await instance.post(`/reviews`, review);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
