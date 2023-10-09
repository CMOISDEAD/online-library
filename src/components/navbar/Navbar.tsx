import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { UserActions } from "./UserActions";
import { Toggle } from "./Toggle";
import { GetMember } from "./GetMember";

export const Navigation = () => {
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
        <Toggle />
        {/* <SearchBar /> */}
        <UserActions />
      </NavbarContent>
    </Navbar>
  );
};
