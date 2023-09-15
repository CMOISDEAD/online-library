import axios from "axios";

// const baseURL = import.meta.env.VITE_API_URL
const baseURL = "http://localhost:3000/api/";

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
