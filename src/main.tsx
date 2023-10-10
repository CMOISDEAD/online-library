import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./components/Root";
import Home from "./routes/Home";
import { Reader } from "./routes/Reader";
import { Login } from "./routes/Login";
import { Toaster } from "react-hot-toast";
import { Register } from "./routes/Register";
import { Providers } from "./components/Providers";
import { Dashboard } from "./routes/Dashboard";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/reader/:id",
        element: <Reader />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={router} />
      <Toaster position="bottom-right" />
    </Providers>
  </React.StrictMode>,
);
