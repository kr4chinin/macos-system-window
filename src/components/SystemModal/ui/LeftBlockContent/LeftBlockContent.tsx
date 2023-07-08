import { styled } from 'styled-components';
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

export const LeftBlockContent = () => {
  return (
    <SystemScrollArea>
      <Root>
        <DirectoryCollapsibleList title="Favorites" listOptions={favoritesList} />
        <DirectoryCollapsibleList title="iCloud" listOptions={iCloudList} />
        <DirectoryCollapsibleList title="Locations" listOptions={locationsList} />
        <DirectoryCollapsibleList title="Tags" listOptions={tagsList} />
      </Root>
    </SystemScrollArea>
  );
};
