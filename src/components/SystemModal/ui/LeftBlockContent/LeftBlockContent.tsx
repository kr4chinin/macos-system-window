import { useEffect } from 'react';
import { styled } from 'styled-components';
import { useSystemModalContext } from '../../../../context/useSystemModalContext';
import { ScrollPosition } from '../../../../models/ScrollPosition';
import { SystemScrollArea } from '../../../SystemScrollArea/SystemScrollArea';
import { makeFavoritesList } from '../../helpers/makeFavoritesList';
import { makeICloudList } from '../../helpers/makeICloudList';
import { makeLocationsList } from '../../helpers/makeLocationsList';
import { makeTagsList } from '../../helpers/makeTagsList';
import { DirectoryCollapsibleList } from '../DirectoryCollapsibleList/DirectoryCollapsibleList';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 0 12px 12px;
`;

const favoritesList = makeFavoritesList();
const iCloudList = makeICloudList();
const locationsList = makeLocationsList();
const tagsList = makeTagsList();

interface Props {
  onScrollPositionChange: (scrollPosition: ScrollPosition) => void;
}

export const LeftBlockContent = (props: Props) => {
  const { onScrollPositionChange } = props;

  const { setCurrentDirectory } = useSystemModalContext();

  useEffect(() => {
    setCurrentDirectory(favoritesList[0]);
  }, [setCurrentDirectory]);

  return (
    <SystemScrollArea onScrollPositionChange={onScrollPositionChange}>
      <Root>
        <DirectoryCollapsibleList title="Favorites" listOptions={favoritesList} />
        <DirectoryCollapsibleList title="iCloud" listOptions={iCloudList} />
        <DirectoryCollapsibleList title="Locations" listOptions={locationsList} />
        <DirectoryCollapsibleList title="Tags" listOptions={tagsList} />
      </Root>
    </SystemScrollArea>
  );
};
