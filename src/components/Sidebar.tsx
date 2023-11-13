import { NavLink } from "react-router-dom";
import {
  PiBooks,
  PiLightning,
  PiGithubLogo,
  PiBookmarkSimple,
} from "react-icons/pi";
import useLibraryStore from "../store/store";

export const Sidebar = () => {
  const user = useLibraryStore((state) => state.user);

  return (
    <div className="sticky top-0 hidden h-screen w-12 flex-col content-center items-center justify-between gap-4 overflow-y-auto border-r border-divider bg-background py-5 sm:flex">
      <div className="flex flex-col content-center items-center justify-center gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive ? "bg-primary/80" : "rounded p-2 transition-colors "
            } rounded p-2 transition-colors hover:cursor-pointer hover:bg-focus`
          }
        >
          <PiBooks />
        </NavLink>
        <NavLink
          to="/bookmarks"
          className={({ isActive }) =>
            `${
              isActive ? "bg-primary/80" : "rounded p-2 transition-colors "
            } rounded p-2 transition-colors hover:cursor-pointer hover:bg-focus`
          }
        >
          <PiBookmarkSimple />
        </NavLink>
        {user.role === "admin" && (
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${
                isActive ? "bg-primary/80" : "rounded p-2 transition-colors "
              } rounded p-2 transition-colors hover:cursor-pointer hover:bg-focus`
            }
            aria-disabled="true"
          >
            <PiLightning />
          </NavLink>
        )}
      </div>

      <div className="flex flex-col content-center items-center justify-center gap-4">
        <a
          href="https://github.com/CMOISDEAD/online-library"
          target="_blank"
          className="rounded p-2 transition-colors hover:cursor-pointer hover:bg-focus"
        >
          <PiGithubLogo />
        </a>
      </div>
    </div>
  );
};
