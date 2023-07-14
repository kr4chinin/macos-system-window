import { useState } from 'react';
import { Panel } from 'react-resizable-panels';
import { styled } from 'styled-components';
import { ScrollPosition } from '../../../../models/ScrollPosition';
import { LeftBlockContent } from '../LeftBlockContent/LeftBlockContent';
import { LeftBlockHeader } from '../LeftBlockHeader/LeftBlockHeader';

const Root = styled(Panel)`
  position: relative;

  display: flex;
  flex-direction: column;

  color: var(--gray);
  background-color: var(--transparent-modal-background);
  backdrop-filter: blur(20px);
`;

interface Props {
  onClose: () => void;
  onCollapse: (collapsed: boolean) => void;
}

export const LeftBlock = (props: Props) => {
  const { onClose, onCollapse } = props;

  const [scrollPosition, onScrollPositionChange] = useState<ScrollPosition>({ x: 0, y: 0 });

  return (
    <Root
      collapsible
      minSize={20}
      maxSize={40}
      defaultSize={30}
      collapsedSize={0}
      onCollapse={onCollapse}
    >
      <LeftBlockHeader contentScrolled={scrollPosition.y > 0} onClose={onClose} />
      <LeftBlockContent onScrollPositionChange={onScrollPositionChange} />
    </Root>
  );
};
