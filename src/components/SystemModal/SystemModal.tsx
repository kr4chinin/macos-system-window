import { useState } from 'react';
import { PanelGroup } from 'react-resizable-panels';
import { styled } from 'styled-components';
import { ModalBounds } from '../../models/ModalBounds';
import { ModalPosition } from '../../models/ModalPosition';
import { DraggableResizableWindow } from '../DraggableResizableWindow/DraggableResizableWindow';
import { LeftBlock } from './ui/LeftBlock/LeftBlock';
import { ResizeHandler } from './ui/ResizeHandler/ResizeHandler';
import { RightBlock } from './ui/RightBlock/RightBlock';

const windowInnerHeight = window.innerHeight;

const defaultModalSize = {
  width: 912,
  height: 606,
};

const defaultModalPosition: ModalPosition = {
  x: (window.innerWidth - defaultModalSize.width) / 2,
  y: (windowInnerHeight - defaultModalSize.height) / 3,
};

export const getDefaultModalBounds = (): ModalBounds => {
  return {
    size: defaultModalSize,
    position: defaultModalPosition,
  };
};

const StyledPanelGroup = styled(PanelGroup)`
  flex: 1;
`;

interface Props {
  opened: boolean;
  onClose: () => void;
}

export const SystemModal = (props: Props) => {
  const { opened, onClose } = props;

  const [modalBounds, setModalBounds] = useState<ModalBounds>(getDefaultModalBounds());

  if (!opened) {
    return null;
  }

  return (
    <DraggableResizableWindow modalBounds={modalBounds} setModalBounds={setModalBounds}>
      <StyledPanelGroup direction="horizontal" disablePointerEventsDuringResize>
        <LeftBlock onClose={onClose} />

        <ResizeHandler />

        <RightBlock />
      </StyledPanelGroup>
    </DraggableResizableWindow>
  );
};
