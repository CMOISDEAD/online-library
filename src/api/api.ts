import axios from "axios";

const baseURL = "https://online-library-backend.vercel.app/api";

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
