import { ReactNode } from 'react';
import { styled } from 'styled-components';
import { truncate } from '../../../mixins/truncate';

export const Root = styled.li<{ $light?: boolean }>`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.25px;
  color: ${p => (p.$light ? 'var(--gray-60)' : 'var(--gray)')};

  padding: 3px 10px 4px;
  border-radius: 4px;

  ${truncate}

  &:hover {
    background-color: #4e7cde;
  }
`;

const RightContent = styled.span`
  color: var(--gray-60);
`;

interface Props {
  children: ReactNode;
  rightContent?: ReactNode;
  light?: boolean;
}

export const NavbarMenuItem = (props: Props) => {
  const { children, rightContent, light } = props;

  return (
    <Root $light={light}>
      {children}

      <RightContent>{rightContent}</RightContent>
    </Root>
  );
};
