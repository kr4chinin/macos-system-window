import { styled } from 'styled-components';
import { Home } from './ui/Home/Home';

const Root = styled.nav`
  height: 24px;
  width: 100%;

  padding: 0 12px;
  background-color: #4f4f4f4f;
  backdrop-filter: blur(20px);
`;

export const Navbar = () => {
  return (
    <Root>
      <Home />
    </Root>
  );
};
