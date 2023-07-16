import { styled } from 'styled-components';
import { useSystemModalContext } from '../../../../context/useSystemModalContext';
import { SystemClasses } from '../../../../models/SystemClasses';
import { NavigationButton } from '../NavigationButton/NavigationButton';
import { SearchButton } from '../SearchButton/SearchButton';
import { TrafficsLights } from '../TrafficLights/TrafficsLights';

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

interface Props {
  leftPanelCollapsed: boolean;
  toggleFullPage: () => void;
}

export const RightBlockHeader = (props: Props) => {
  const { leftPanelCollapsed, toggleFullPage } = props;

  const { currentDirectory } = useSystemModalContext();

  const { navigationState, goOneDirectoryBack, goOneDirectoryForward, close } =
    useSystemModalContext();
  const { canGoBack, canGoForward } = navigationState;

  return (
    <Root className={SystemClasses.RND_WINDOW_DRAGGABLE}>
      {leftPanelCollapsed && <TrafficsLights onClose={close} toggleFullPage={toggleFullPage} />}

      <NavigationButtonsWrapper>
        <NavigationButton disabled={!canGoBack} variant="back" onClick={goOneDirectoryBack} />
        <NavigationButton
          disabled={!canGoForward}
          variant="forward"
          onClick={goOneDirectoryForward}
        />
      </NavigationButtonsWrapper>

      <DirectoryName>{currentDirectory?.label}</DirectoryName>

      <SearchButtonWrapper>
        <SearchButton />
      </SearchButtonWrapper>
    </Root>
  );
};
