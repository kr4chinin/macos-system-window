import { styled } from 'styled-components';
import { DirectoryCollapsibleList } from '../DirectoryCollapsibleList/DirectoryCollapsibleList';
import { makeFavoritesList } from '../../helpers/makeFavoritesList';

const Root = styled.div`
  padding: 0 12px 12px;
`;

const favoritesList = makeFavoritesList();

export const LeftBlockContent = () => {
  return (
    <Root>
      <DirectoryCollapsibleList title="Favorites" listOptions={favoritesList} />
    </Root>
  );
};
