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
    <div className="flex overflow-y-auto sticky top-0 flex-col gap-4 justify-between content-center items-center py-5 w-12 h-screen bg-base-200">
      <div className="flex flex-col gap-4 justify-center content-center items-center">
        <Link to="/">
          <div className="p-2 rounded transition-colors hover:cursor-pointer hover:bg-base-100">
            <PiBooksBold />
          </div>
        </Link>
        <Link to="/bookmarks">
          <div className="p-2 rounded transition-colors hover:cursor-pointer hover:bg-base-100">
            <PiBookmarkSimpleBold />
          </div>
        </Link>
        <Link to="/">
          <div className="p-2 rounded transition-colors hover:cursor-pointer hover:bg-base-100">
            <PiLightningBold />
          </div>
        </Link>
      </div>

      <div className="flex flex-col gap-4 justify-center content-center items-center">
        <a
          href="https://github.com/CMOISDEAD/online-library"
          target="_blank"
          className="p-2 rounded transition-colors hover:cursor-pointer hover:bg-base-100"
        >
          <PiGithubLogo />
        </a>
        <Link to="/settings">
          <div className="p-2 rounded transition-colors hover:cursor-pointer hover:bg-base-100">
            <PiUserGear />
          </div>
        </Link>
      </div>
    </div>
  );
};
