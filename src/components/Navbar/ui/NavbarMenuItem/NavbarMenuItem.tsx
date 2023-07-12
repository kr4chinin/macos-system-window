import { styled } from 'styled-components';
import { truncate } from '../../../mixins/truncate';
import { ReactNode } from 'react';

export const Root = styled.li`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  color: var(--gray);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.25px;

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
}

export const NavbarMenuItem = (props: Props) => {
  const { children, rightContent } = props;

  return (
    <Root>
      {children}

      <RightContent>{rightContent}</RightContent>
    </Root>
  );
};
