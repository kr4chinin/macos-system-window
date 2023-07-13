import { styled } from 'styled-components';

export const NavbarElementTitle = styled.div<{ $bold?: boolean }>`
  height: 100%;

  display: flex;
  align-items: center;

  color: var(--gray);
  text-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
  font-size: 14px;
  font-weight: ${p => (p.$bold ? 700 : 500)};
  letter-spacing: -0.35px;
`;
