import { Panel } from 'react-resizable-panels';
import { styled } from 'styled-components';
import { LeftBlockContent } from '../LeftBlockContent/LeftBlockContent';
import { LeftBlockHeader } from '../LeftBlockHeader/LeftBlockHeader';
import { useState } from 'react';
import { ScrollPosition } from '../../../../models/ScrollPosition';

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

  const [scrollPosition, onScrollPositionChange] = useState<ScrollPosition>({ x: 0, y: 0 });

  return (
    <Root modalFocused={modalFocused} defaultSize={30} maxSize={50} minSize={10}>
      <LeftBlockHeader contentScrolled={scrollPosition.y > 0} onClose={onClose} />
      <LeftBlockContent onScrollPositionChange={onScrollPositionChange} />
    </Root>
  );
};
