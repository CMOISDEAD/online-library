import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  useDisclosure,
} from "@nextui-org/react";
import { Setting } from "./Settings";
import { LogoutModal } from "./Logout";
import useLibraryStore from "../../store/store";
import { Profile } from "./Profile";

export const UserActions = () => {
  const {
    isOpen: isSettingsOpen,
    onOpen: onSettingOpen,
    onOpenChange: onSettingsOpenChange,
  } = useDisclosure();
  const {
    isOpen: isLogoutOpen,
    onOpen: onLogoutOpen,
    onOpenChange: onLogoutOpenChange,
  } = useDisclosure();
  const {
    isOpen: isProfileOpen,
    onOpen: onProfileOpen,
    onOpenChange: onProfileOpenChange,
  } = useDisclosure();
  const user = useLibraryStore((state) => state.user);

  return (
    <>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            showFallback
            className="transition-transform"
            color="primary"
            name={user.username}
            size="sm"
            src={user.photo}
            as="button"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem
            key="profile"
            className="h-14 gap-2"
            textValue="Profile"
          >
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{user.email}</p>
          </DropdownItem>
          <DropdownItem
            key="settings"
            textValue="My Setting"
            onClick={onProfileOpen}
          >
            My Profile
          </DropdownItem>
          <DropdownItem key="analytics" textValue="Analytics">
            Analytics
          </DropdownItem>
          <DropdownItem
            key="configurations"
            textValue="Configurations"
            onClick={onSettingOpen}
          >
            Settings
          </DropdownItem>
          <DropdownItem key="help_and_feedback" textValue="Help & Feedback">
            Help & Feedback
          </DropdownItem>
          <DropdownItem
            key="logout"
            color="danger"
            onClick={onLogoutOpen}
            textValue="Log Out"
          >
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Setting isOpen={isSettingsOpen} onOpenChange={onSettingsOpenChange} />
      <LogoutModal isOpen={isLogoutOpen} onOpenChange={onLogoutOpenChange} />
      <Profile isOpen={isProfileOpen} onOpenChange={onProfileOpenChange} />
    </>
  );
};
