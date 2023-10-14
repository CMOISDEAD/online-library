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
import { Billing } from "./routes/Billing";
import { Profile } from "./routes/Profile";

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
      {
        path: "/billing",
        element: <Billing />,
      },
      {
        path: "/profile",
        element: <Profile />,
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
  <Providers>
    <RouterProvider router={router} />
    <Toaster position="bottom-right" />
  </Providers>,
);
