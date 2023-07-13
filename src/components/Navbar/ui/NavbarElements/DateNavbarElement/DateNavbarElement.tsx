import { NavbarElement } from '../NavbarElement/NavbarElement';
import { NavbarElementTitle } from '../NavbarElementTitle/NavbarElementTitle';

export const DateNavbarElement = () => {
  // current date in Thu 13 Jul 22:31 format
  const currentDate = new Date().toLocaleString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <NavbarElement target={<NavbarElementTitle>{currentDate}</NavbarElementTitle>}></NavbarElement>
  );
};
