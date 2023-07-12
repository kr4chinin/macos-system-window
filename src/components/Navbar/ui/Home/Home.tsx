import { styled } from 'styled-components';
import { ReactComponent as AppleIcon } from '../../../../assets/icons/Navbar/apple.svg';
import { NavbarElement } from '../NavbarElement/NavbarElement';
import { NavbarMenuList } from '../NavbarMenuList/NavbarMenuList';
import { NavbarMenuItem } from '../NavbarMenuItem/NavbarMenuItem';
import { NavbarMenuDelimiter } from '../NavbarMenuDelimiter/NavbarMenuDelimiter';

const IconWrapper = styled.div`
  height: 24px;
  width: auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Home = () => {
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
      </NavbarMenuList>
    </NavbarElement>
  );
};
