import { HStack, IconButton, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { HamburgerIcon } from "@chakra-ui/icons";

interface Props {
  onSearch: (searchText: string) => void;
  onToggleSidebar: () => void;
}

const NavBar = ({ onSearch, onToggleSidebar }: Props) => {
  return (
    <HStack padding="10px">
      <IconButton
        zIndex={9999}
        aria-label="Toggle Sidebar"
        position={{ base: "sticky" }}
        top={{ base: "0" }}
        icon={<HamburgerIcon />}
        onClick={onToggleSidebar}
        display={{ base: "block", lg: "none" }}
      />
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
