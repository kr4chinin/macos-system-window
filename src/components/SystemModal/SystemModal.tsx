import { useClickOutside, useDisclosure } from '@mantine/hooks';
import { useEffect, useRef, useState } from 'react';
import { ImperativePanelHandle, PanelGroup } from 'react-resizable-panels';
import { styled } from 'styled-components';
import { ModalBounds } from '../../models/ModalBounds';
import { ModalPosition } from '../../models/ModalPosition';
import { RNDWindow } from '../RNDWindow/RNDWindow';
import { extractNumericWidth } from './helpers/extractNumericWidth';
import { LeftBlock } from './ui/LeftBlock/LeftBlock';
import { ResizeHandler } from './ui/ResizeHandler/ResizeHandler';
import { RightBlock } from './ui/RightBlock/RightBlock';

const windowInnerHeight = window.innerHeight;

const defaultModalSize = {
  width: 920,
  height: 610,
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

  const [modalFocused, { close, open }] = useDisclosure(false);
  const [modalBounds, setModalBounds] = useState<ModalBounds>(getDefaultModalBounds());

  const modalRef = useClickOutside(close);
  const leftPanelRef = useRef<ImperativePanelHandle>(null);

  const [leftBlockCollapsed, setLeftBlockCollapsed] = useState(true);

  useEffect(() => {
    if (!leftPanelRef.current) {
      return;
    }

    const { size } = modalBounds;

    const width = extractNumericWidth(size.width);
    const height = extractNumericWidth(size.height);

    if (height < 450 && width < 650) {
      leftPanelRef.current.collapse();

      setLeftBlockCollapsed(true);
    } else {
      leftPanelRef.current.expand();
    }
  }, [modalBounds]);

  if (!opened) {
    return null;
  }

  return (
    <RNDWindow
      ref={modalRef}
      modalBounds={modalBounds}
      setModalBounds={setModalBounds}
      onMouseDown={open}
    >
      <StyledPanelGroup direction="horizontal" disablePointerEventsDuringResize>
        <LeftBlock
          ref={leftPanelRef}
          modalFocused={modalFocused}
          onClose={onClose}
          onCollapse={setLeftBlockCollapsed}
        />

        <ResizeHandler hidden={leftBlockCollapsed} />

        <RightBlock />
      </StyledPanelGroup>
    </RNDWindow>
  );
};
