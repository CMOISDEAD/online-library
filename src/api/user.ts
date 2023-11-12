import axios from "axios";
import instance from "./api";
import useLibraryStore from "../store/store";

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

export const addShopping = async (userId: string, bookId: string) => {
  try {
    const user = await instance.post("shopping", { userId, bookId });
    return user.data;
  } catch (error) {
    console.log(error);
  }
};

export const removeShopping = async (userId: string, bookId: string) => {
  try {
    const user = await instance.post("removeShopping", { userId, bookId });
    return user.data;
  } catch (error) {
    console.log(error);
  }
};

export const updatePhoto = async ({ id, photo }: any) => {
  const image = photo;
  try {
    const content = new FormData();
    content.append("file", image);
    content.append("upload_preset", "library");
    content.append("cloud_name", "djfou58lo");
    const { data } = await axios.post(
      "https://api.cloudinary.com/v1_1/djfou58lo/image/upload",
      content,
    );
    const user = await instance.post("/updatePhoto", { id, photo: data.url });
    window.localStorage.setItem("user", JSON.stringify(user.data));
    useLibraryStore.setState({ user: user.data });
  } catch (error) {
    console.error(error);
  }
};
