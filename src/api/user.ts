import instance from "./api";

interface Props {
  userId: string;
  bookId: string;
}

export const getUser = async (id: string) => {
  try {
    const user = await instance.get(`user/${id}`);
    return user.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (data: any) => {
  try {
    const user = await instance.put("updateUser", data);
    return user.data;
  } catch (error) {
    console.log(error);
  }
};

export const addRecent = async (data: Props) => {
  try {
    const user = await instance.post("addRecent", data);
    return user.data;
  } catch (error) {
    console.log(error);
  }
};
