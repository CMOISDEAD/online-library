import { PiBook, PiInstagramLogo, PiTwitterLogo } from "react-icons/pi";

export const Footer = () => {
  return (
    <footer className="items-center p-4 footer bg-base-200 text-neutral-content">
      <div className="grid-flow-col items-center">
        <PiBook />
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div className="hidden grid-flow-col gap-4 md:flex md:justify-self-end md:place-self-center">
        <a
          href="#"
          className="p-2 rounded transition-colors hover:cursor-pointer hover:bg-base-100"
        >
          <PiTwitterLogo />
        </a>
        <a
          href="#"
          className="p-2 rounded transition-colors hover:cursor-pointer hover:bg-base-100"
        >
          <PiInstagramLogo />
        </a>
      </div>
    </footer>
  );
};
