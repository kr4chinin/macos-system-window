import { styled } from 'styled-components';
import { BatteryNavbarElement } from './ui/NavbarElements/BatteryNavbarElement/BatteryNavbarElement';
import { FinderNavbarElement } from './ui/NavbarElements/FinderNavbarElement/FinderNavbarElement';
import { HomeNavbarElement } from './ui/NavbarElements/HomeNavbarElement/HomeNavbarElement';
import { NetworkNavbarElement } from './ui/NavbarElements/NetworkNavbarElement/NetworkNavbarElement';
import { RandomNavbarElement } from './ui/NavbarElements/RandomNavbarElement/RandomNavbarElement';
import { WidgetsNavbarElement } from './ui/NavbarElements/WidgetsNavbarElements/WidgetsNavbarElement';
import { DateNavbarElement } from './ui/NavbarElements/DateNavbarElement/DateNavbarElement';

const Root = styled.nav`
  height: var(--navbar-height);
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  padding: 0 12px;
  background-color: #4f4f4f4f;
  backdrop-filter: blur(20px);
`;

const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Navbar = () => {
  return (
    <Root>
      <Group>
        <HomeNavbarElement />
        <FinderNavbarElement />

        <RandomNavbarElement title="Section 1" />
        <RandomNavbarElement title="Section 2" />
        <RandomNavbarElement title="Section 3" />
      </Group>

      <Group>
        <NetworkNavbarElement />
        <BatteryNavbarElement />
        <WidgetsNavbarElement />
        <DateNavbarElement />
      </Group>
    </Root>
  );
};
