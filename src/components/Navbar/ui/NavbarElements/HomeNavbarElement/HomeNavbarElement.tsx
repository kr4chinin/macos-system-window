import { styled } from 'styled-components';
import { ReactComponent as AppleIcon } from '../../../../../assets/icons/Navbar/apple.svg';
import { ReactComponent as MenuBarIcon } from '../../../../../assets/icons/Navbar/menu_bar.svg';
import { NavbarMenuDelimiter } from '../../NavbarMenuDelimiter/NavbarMenuDelimiter';
import { NavbarMenuItem } from '../../NavbarMenuItem/NavbarMenuItem';
import { NavbarMenuList } from '../../NavbarMenuList/NavbarMenuList';
import { NavbarElement } from '../NavbarElement/NavbarElement';

const IconWrapper = styled.div`
  height: 24px;
  width: auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeNavbarElement = () => {
  return (
    <NavbarElement
      target={
        <IconWrapper>
          <AppleIcon />
        </IconWrapper>
      }
      icon
      dropdownWidth="205px"
    >
      <NavbarMenuList>
        <NavbarMenuItem>About This Mac</NavbarMenuItem>

        <NavbarMenuDelimiter />

        <NavbarMenuItem>System Preferences</NavbarMenuItem>
        <NavbarMenuItem>App Store</NavbarMenuItem>

        <NavbarMenuDelimiter />

        <NavbarMenuItem>Menu Item</NavbarMenuItem>
        <NavbarMenuItem rightContent="⌥⇧⌘⌃Q">Menu Item</NavbarMenuItem>
        <NavbarMenuItem rightContent={<MenuBarIcon />}>Menu Item</NavbarMenuItem>

        <NavbarMenuDelimiter />

        <NavbarMenuItem>Sleep</NavbarMenuItem>
        <NavbarMenuItem>Restart...</NavbarMenuItem>
        <NavbarMenuItem>Shut down...</NavbarMenuItem>

        <NavbarMenuDelimiter />

        <NavbarMenuItem rightContent="⌃⌘Q">Lock screen</NavbarMenuItem>
        <NavbarMenuItem rightContent="⇧⌘Q">Log out</NavbarMenuItem>
      </NavbarMenuList>
    </NavbarElement>
  );
};
