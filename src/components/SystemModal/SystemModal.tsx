import { useDidUpdate, useDisclosure } from '@mantine/hooks';
import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { ImperativePanelHandle, PanelGroup } from 'react-resizable-panels';
import { styled } from 'styled-components';
import { ModalBounds } from '../../models/ModalBounds';
import { ModalPosition } from '../../models/ModalPosition';
import { RndWindow } from '../RndWindow/RndWindow';
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

  const [isFullPageMode, { toggle: toggleFullPageMode }] = useDisclosure(false);

  const [previousModalBounds, setPreviousModalBounds] = useState<ModalBounds | null>(null);
  const [modalBounds, setModalBounds] = useState<ModalBounds>(() => getDefaultModalBounds());

  const leftPanelRef = useRef<ImperativePanelHandle>(null);

  // we need this indicator because onCollapse cb will be triggered even with imperative api call
  // so that there is no way to know if panel was collapsed by user or by imperative api call
  const leftPanelHardCollapsed = useRef(false);

  const [leftPanelCollapsed, setLeftPanelCollapsed] = useState(true);

  const handleHardCollapse = useCallback((collapsed: boolean) => {
    if (collapsed) {
      leftPanelHardCollapsed.current = true;
    }

    setLeftPanelCollapsed(collapsed);
  }, []);

  useDidUpdate(() => {
    if (isFullPageMode) {
      setPreviousModalBounds(modalBounds);

      setModalBounds({
        size: {
          width: window.innerWidth,
          height: window.innerHeight - 136,
        },
        position: {
          x: 0,
          y: 8,
        },
      });
    } else {
      if (previousModalBounds) {
        setModalBounds(previousModalBounds);
      }

      setPreviousModalBounds(null);
    }
  }, [isFullPageMode]);

  useLayoutEffect(() => {
    if (!leftPanelRef.current || leftPanelHardCollapsed.current) {
      return;
    }

    const { size } = modalBounds;

    const width = extractNumericWidth(size.width);
    const height = extractNumericWidth(size.height);

    const { collapse, expand } = leftPanelRef.current;

    if (height < 450 && width < 650) {
      collapse();

      setLeftPanelCollapsed(true);

      leftPanelHardCollapsed.current = false;
    } else {
      expand();

      leftPanelHardCollapsed.current = false;
    }
  }, [modalBounds]);

  if (!opened) {
    return null;
  }

  return (
    <RndWindow modalBounds={modalBounds} setModalBounds={setModalBounds}>
      <StyledPanelGroup direction="horizontal" disablePointerEventsDuringResize>
        <LeftBlock
          ref={leftPanelRef}
          onClose={onClose}
          onCollapse={handleHardCollapse}
          toggleFullPage={toggleFullPageMode}
        />

        <ResizeHandler hidden={leftPanelCollapsed} />

        <RightBlock leftPanelCollapsed={leftPanelCollapsed} toggleFullPage={toggleFullPageMode} />
      </StyledPanelGroup>
    </RndWindow>
  );
};
