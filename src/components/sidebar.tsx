import {
  PiBookmarkSimpleBold,
  PiBooksBold,
  PiGithubLogo,
  PiLightningBold,
  PiUserGear,
} from "react-icons/pi";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="flex overflow-y-auto flex-col gap-4 justify-between content-center items-center py-5 w-12 h-screen bg-base-200">
      <ul className="flex flex-col gap-4 justify-center content-center items-center">
        <li className="p-2 rounded transition-colors hover:cursor-pointer hover:bg-base-100">
          <Link to="/">
            <PiBooksBold />
          </Link>
        </li>
        <li className="p-2 rounded transition-colors hover:cursor-pointer hover:bg-base-100">
          <Link to="/bookmarks">
            <PiBookmarkSimpleBold />
          </Link>
        </li>
        <li className="p-2 rounded transition-colors hover:cursor-pointer hover:bg-base-100">
          <Link to="/">
            <PiLightningBold />
          </Link>
        </li>
      </ul>

      <ul className="flex flex-col gap-4 justify-center content-center items-center">
        <li className="p-2 rounded transition-colors hover:cursor-pointer hover:bg-base-100">
          <a href="https://github.com/CMOISDEAD/online-library" target="_blank">
            <PiGithubLogo />
          </a>
        </li>
        <li className="p-2 rounded transition-colors hover:cursor-pointer hover:bg-base-100">
          <Link to="/settings">
            <PiUserGear />
          </Link>
        </li>
      </ul>
    </div>
  );
};
