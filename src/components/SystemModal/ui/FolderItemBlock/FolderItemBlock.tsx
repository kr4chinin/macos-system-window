import { css, styled } from 'styled-components';
import { ReactComponent as FolderIcon } from '../../../../assets/icons/SystemModal/folder.svg';
import { truncate } from '../../../../mixins/truncate';
import { FolderItem } from '../../../../models/FolderItem';

const Root = styled.li`
  width: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  text-align: center;
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  height: 64px;
  width: 76px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${p =>
    p.$active &&
    css`
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.15);
    `}
`;

const Title = styled.span<{ $active: boolean }>`
  margin: 0;

  padding: 2px 4px;

  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.08px;
  color: var(--gray);

  ${p =>
    p.$active &&
    css`
      border-radius: 4px;
      background-color: #4e7cde;
    `}

  ${truncate}
`;

interface Props {
  folderItem: FolderItem;
  activeId: string | null;
  setActiveId: (id: string | null) => void;
}

export const FolderItemBlock = (props: Props) => {
  const { folderItem, activeId, setActiveId } = props;

  const { id, name } = folderItem;
  const active = activeId === id;

  return (
    <Root onClick={() => setActiveId(id)}>
      <IconWrapper $active={active}>
        <FolderIcon />
      </IconWrapper>

      <Title $active={active}>{name}</Title>
    </Root>
  );
};
