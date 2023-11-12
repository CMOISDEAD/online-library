import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../api/user";
import useLibraryStore from "../store/store";

export const useUser = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const staged = JSON.parse(window.localStorage.getItem("user") || "");
      if (!staged) return navigate("/login");
      const user = await getUser(staged.id);
      useLibraryStore.setState({ user: user });
      window.localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
    })();
  }, []);

  return { user };
};
