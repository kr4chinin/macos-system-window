import { ReactComponent as BatteryIcon } from '../../../../../assets/icons/Navbar/battery.svg';
import { NavbarMenuDelimiter } from '../../NavbarMenuDelimiter/NavbarMenuDelimiter';
import { NavbarMenuItem } from '../../NavbarMenuItem/NavbarMenuItem';
import { NavbarElement } from '../NavbarElement/NavbarElement';

export const BatteryNavbarElement = () => {
  return (
    <NavbarElement position="bottom" target={<BatteryIcon />}>
      <NavbarMenuItem>Battery</NavbarMenuItem>

      <NavbarMenuDelimiter />

      <NavbarMenuItem>Battery Settings...</NavbarMenuItem>
    </NavbarElement>
  );
};
