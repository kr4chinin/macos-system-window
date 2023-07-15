import { styled } from 'styled-components';
import { SystemClasses } from '../../../../models/SystemClasses';
import { NavigationButton } from '../NavigationButton/NavigationButton';
import { SearchButton } from '../SearchButton/SearchButton';
import { useSystemModalContext } from '../../../../context/useSystemModalContext';

const Root = styled.div`
  width: 100%;
  height: var(--modal-header-height);

  display: flex;
  align-items: center;
  gap: 12px;

  padding: 10px 16px;
  background-color: #37363f;
  border-bottom: 1px solid var(--border-dark);
`;

const NavigationButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DirectoryName = styled.h2`
  margin: 0;

  font-size: 15px;
  font-weight: 700;
  color: var(--gray);
`;

const SearchButtonWrapper = styled.div`
  margin-left: auto;
`;

export const RightBlockHeader = () => {
  const { currentDirectory } = useSystemModalContext();

  return (
    <Root className={SystemClasses.RND_WINDOW_DRAGGABLE}>
      <NavigationButtonsWrapper>
        <NavigationButton variant="back" />
        <NavigationButton variant="forward" />
      </NavigationButtonsWrapper>

      <DirectoryName>{currentDirectory?.label}</DirectoryName>

      <SearchButtonWrapper>
        <SearchButton />
      </SearchButtonWrapper>
    </Root>
  );
};
