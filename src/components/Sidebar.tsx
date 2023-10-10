import { NavLink } from "react-router-dom";
import {
  PiBookmarkSimpleBold,
  PiBooksBold,
  PiGithubLogo,
  PiLightningBold,
} from "react-icons/pi";

const routes = [
  {
    to: "/",
    icon: <PiBooksBold />,
  },
  {
    to: "/bookmarks",
    icon: <PiBookmarkSimpleBold />,
  },
  {
    to: "/dashboard",
    icon: <PiLightningBold />,
  },
];

export const Sidebar = () => {
  return (
    <div className="sticky top-0 flex h-screen w-12 flex-col content-center items-center justify-between gap-4 overflow-y-auto border-r border-divider bg-background py-5">
      <div className="flex flex-col content-center items-center justify-center gap-4">
        {routes.map(({ to, icon }, i) => (
          <NavLink
            to={to}
            className={({ isActive }) =>
              `${
                isActive ? "bg-primary/80" : "rounded p-2 transition-colors "
              } rounded p-2 transition-colors hover:cursor-pointer hover:bg-focus`
            }
            key={i}
          >
            {icon}
          </NavLink>
        ))}
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
