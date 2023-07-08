import { styled } from 'styled-components';
import { DirectoryCollapsibleList } from '../DirectoryCollapsibleList/DirectoryCollapsibleList';
import { makeFavoritesList } from '../../helpers/makeFavoritesList';
import { makeICloudList } from '../../helpers/makeICloudList';
import { makeLocationsList } from '../../helpers/makeLocationsList';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 0 12px 12px;
`;

const favoritesList = makeFavoritesList();
const iCloudList = makeICloudList();
const locationsList = makeLocationsList();

export const LeftBlockContent = () => {
  return (
    <Root>
      <DirectoryCollapsibleList title="Favorites" listOptions={favoritesList} />
      <DirectoryCollapsibleList title="iCloud" listOptions={iCloudList} />
      <DirectoryCollapsibleList title="Locations" listOptions={locationsList} />
    </Root>
  );
};
