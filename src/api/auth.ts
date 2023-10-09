import axios from "axios";

// const baseURL = import.meta.env.VITE_API_URL
const baseURL = "http://localhost:3000/auth/";

const auth = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const authLogin = async (user: any) => {
  try {
    const res = await auth.post("/login", user);
    return res.data;
  } catch (error: any) {
    const code = error.response.status;
    if (code === 401) throw new Error("Invalid credentials");
    else if (code === 404) throw new Error("User not found");
    throw new Error("something went wrong, please try again");
  }
};

export const authRegister = async (user: any) => {
  try {
    const res = await auth.post("/register", user);
    return res.data;
  } catch (error: any) {
    const code = error.response.status;
    if (code === 409) throw new Error("User already exists");
    throw new Error("something went wrong, please try again");
  }
};
