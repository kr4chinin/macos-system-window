import { Panel } from 'react-resizable-panels';
import { styled } from 'styled-components';
import { LeftBlockContent } from '../LeftBlockContent/LeftBlockContent';
import { LeftBlockHeader } from '../LeftBlockHeader/LeftBlockHeader';

const Root = styled(Panel)<{ modalFocused: boolean }>`
  position: relative;

  display: flex;
  flex-direction: column;

  color: var(--gray);
  background-color: var(--transparent-modal-background);
  backdrop-filter: blur(20px);
`;

interface Props {
  modalFocused: boolean;
  onClose: () => void;
}

export const LeftBlock = (props: Props) => {
  const { modalFocused, onClose } = props;

  return (
    <Root modalFocused={modalFocused} defaultSize={30} maxSize={50} minSize={10}>
      <LeftBlockHeader onClose={onClose} />
      <LeftBlockContent />
    </Root>
  );
};
