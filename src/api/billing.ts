import instance from "./api";

export const getBilling = async (userId: string) => {
  try {
    const response = await instance.get("/billing", {
      params: {
        userId,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const saveBilling = async (userId: string, data: any) => {
  try {
    const response = await instance.post("/billing", {
      userId,
      data,
    });
    console.log(data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
