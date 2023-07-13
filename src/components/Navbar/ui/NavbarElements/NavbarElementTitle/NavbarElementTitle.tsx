import { styled } from 'styled-components';

export const NavbarElementTitle = styled.div<{ $bold?: boolean }>`
  height: 100%;

  display: flex;
  align-items: center;

  color: var(--gray);
  font-size: 14px;
  text-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
  font-weight: ${p => (p.$bold ? 700 : 500)};
  letter-spacing: -0.35px;

  padding-bottom: 2px;
`;
