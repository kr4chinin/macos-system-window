import { styled } from 'styled-components';
import { SystemClasses } from '../../../../models/SystemClasses';
import { NavigationButton } from '../NavigationButton/NavigationButton';

const Root = styled.div`
  width: 100%;
  height: var(--header-height);

  display: flex;
  align-items: center;

  padding: 10px 20px;
  background-color: #37363f;
  border-bottom: 1px solid var(--border-dark);
`;

const NavigationButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const RightBlockHeader = () => {
  return (
    <Root className={SystemClasses.RND_WINDOW_DRAGGABLE}>
      <NavigationButtonsWrapper>
        <NavigationButton variant="back" />
        <NavigationButton variant="forward" />
      </NavigationButtonsWrapper>
    </Root>
  );
};
