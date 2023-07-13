import { styled } from 'styled-components';
import { FinderNavbarElement } from './ui/FinderNavbarElement/FinderNavbarElement';
import { HomeNavbarElement } from './ui/HomeNavbarElement/HomeNavbarElement';
import { RandomNavbarElement } from './ui/RandomNavbarElement/RandomNavbarElement';

const Root = styled.nav`
  height: 24px;
  width: 100%;

  display: flex;
  align-items: center;

  padding: 0 12px;
  background-color: #4f4f4f4f;
  backdrop-filter: blur(20px);
`;

export const Navbar = () => {
  return (
    <Root>
      <HomeNavbarElement />
      <FinderNavbarElement />

      <RandomNavbarElement title="Section 1" />
      <RandomNavbarElement title="Section 2" />
      <RandomNavbarElement title="Section 3" />
    </Root>
  );
};
