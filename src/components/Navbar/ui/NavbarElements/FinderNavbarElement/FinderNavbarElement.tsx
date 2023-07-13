import { ReactComponent as MenuBarIcon } from '../../../../../assets/icons/Navbar/menu_bar.svg';
import { NavbarMenuDelimiter } from '../../NavbarMenuDelimiter/NavbarMenuDelimiter';
import { NavbarMenuItem } from '../../NavbarMenuItem/NavbarMenuItem';
import { NavbarMenuList } from '../../NavbarMenuList/NavbarMenuList';
import { NavbarElement } from '../NavbarElement/NavbarElement';
import { NavbarElementTitle } from '../NavbarElementTitle/NavbarElementTitle';

export const FinderNavbarElement = () => {
  return (
    <NavbarElement
      target={<NavbarElementTitle $bold>Finder</NavbarElementTitle>}
      dropdownWidth="205px"
    >
      <NavbarMenuList>
        <NavbarMenuItem>About Finder</NavbarMenuItem>

        <NavbarMenuDelimiter />

        <NavbarMenuItem rightContent="⌘ ,">Settings...</NavbarMenuItem>

        <NavbarMenuDelimiter />

        <NavbarMenuItem rightContent="⇧⌘">Empty Bin...</NavbarMenuItem>

        <NavbarMenuDelimiter />

        <NavbarMenuItem rightContent={<MenuBarIcon />}>Services</NavbarMenuItem>

        <NavbarMenuDelimiter />

        <NavbarMenuItem rightContent="⌥⇧⌘⌃Q">Hide Finder</NavbarMenuItem>
        <NavbarMenuItem rightContent="⌥⌘H">Hide Others</NavbarMenuItem>
        <NavbarMenuItem light>Show all</NavbarMenuItem>
      </NavbarMenuList>
    </NavbarElement>
  );
};
