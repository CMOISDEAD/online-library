import { Navbar, NavbarContent, NavbarItem, Badge } from "@nextui-org/react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserActions } from "./UserActions";
import { Toggle } from "./Toggle";
import { RxBackpack } from "react-icons/rx";
import { GetMember } from "./GetMember";
import useLibraryStore from "../../store/store";

export const Navigation = () => {
  const user = useLibraryStore((state) => state.user);
  const [active, setActive] = useState("");

  return (
    <Navbar isBordered shouldHideOnScroll maxWidth="full">
      <NavbarContent justify="start">
        <NavbarContent className="hidden gap-3 sm:flex" justify="start">
          {[
            { to: "/#books", label: "Top Books" },
            { to: "/#authors", label: "Top Author" },
            { to: "/#editorial", label: "Editors' choice" },
          ].map((item, i) => (
            <NavbarItem key={i}>
              <NavLink
                to={item.to}
                className={
                  active === item.label
                    ? "font-bold text-primary transition-colors hover:text-focus"
                    : "text-foreground transition-colors hover:text-focus"
                }
                onClick={() => setActive(item.label)}
              >
                {item.label}
              </NavLink>
            </NavbarItem>
          ))}
        </NavbarContent>
      </NavbarContent>
      <NavbarContent as="div" className="items-center" justify="end">
        <GetMember />
        <Link to="/shopping">
          <Badge
            color="primary"
            content={user.car ? user.car.length : 0}
            shape="circle"
          >
            <RxBackpack />
          </Badge>
        </Link>
        <Toggle />
        <UserActions />
      </NavbarContent>
    </Navbar>
  );
};
