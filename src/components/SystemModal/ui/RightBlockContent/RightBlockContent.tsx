import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { SystemScrollArea } from '../../../SystemScrollArea/SystemScrollArea';
import { makeFolderItems } from '../../helpers/makeFolderItems';
import { FolderItemBlock } from '../FolderItemBlock/FolderItemBlock';
import { useSystemModalContext } from '../../../../context/useSystemModalContext';

const Root = styled.div`
  height: calc(100% - var(--modal-header-height));
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  height: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  padding: 16px;
`;

export const RightBlockContent = () => {
  const [folderItems, setFolderItems] = useState(() => makeFolderItems());
  const [activeFolderItemId, setActiveFolderItemId] = useState<string | null>(null);

  const { currentDirectory } = useSystemModalContext();

  useEffect(() => {
    setFolderItems(makeFolderItems());
  }, [currentDirectory]);

  return (
    <Root>
      <SystemScrollArea h="100%">
        <List>
          {folderItems.map(f => (
            <FolderItemBlock
              key={f.id}
              folderItem={f}
              activeId={activeFolderItemId}
              setActiveId={setActiveFolderItemId}
            />
          ))}
        </List>
      </SystemScrollArea>
    </Root>
  );
};
