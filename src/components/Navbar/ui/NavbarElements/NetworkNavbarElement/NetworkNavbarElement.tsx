import { ReactComponent as MenuBarIcon } from '../../../../../assets/icons/Navbar/menu_bar.svg';
import { ReactComponent as WifiIcon } from '../../../../../assets/icons/Navbar/wifi.svg';
import { NavbarMenuDelimiter } from '../../NavbarMenuDelimiter/NavbarMenuDelimiter';
import { NavbarMenuItem } from '../../NavbarMenuItem/NavbarMenuItem';
import { NavbarElement } from '../NavbarElement/NavbarElement';

export const NetworkNavbarElement = () => {
  return (
    <NavbarElement position="bottom" target={<WifiIcon />}>
      <NavbarMenuItem>Wi-Fi</NavbarMenuItem>
      <NavbarMenuItem>Weak Security (WPA)...</NavbarMenuItem>

      <NavbarMenuDelimiter />

      <NavbarMenuItem light rightContent={<MenuBarIcon />}>
        Other Networks
      </NavbarMenuItem>

      <NavbarMenuDelimiter />

      <NavbarMenuItem>Wi-Fi Settings</NavbarMenuItem>
    </NavbarElement>
  );
};
