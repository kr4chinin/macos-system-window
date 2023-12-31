import { Dispatch, ReactNode, SetStateAction, forwardRef } from 'react';
import { Rnd, RndDragCallback, RndResizeCallback } from 'react-rnd';
import styled from 'styled-components';
import { ModalBounds } from '../../models/ModalBounds';
import { SystemClasses } from '../../models/SystemClasses';

const Root = styled(Rnd)`
  // we use important to override react-rnd inline styles
  display: flex !important;

  overflow: hidden;
  pointer-events: all;
  flex-direction: column;

  border-radius: 10px;
  background-color: transparent;
  border: 1px solid #78797a85;

  box-shadow: var(--rnd-window-shadow);
`;

const Body = styled.div`
  height: 100%;

  display: flex;

  &:hover {
    // to override react-rnd cursor style
    cursor: default;
  }
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  modalBounds: ModalBounds;
  children: ReactNode;
  setModalBounds: Dispatch<SetStateAction<ModalBounds>>;
}

export const modalMinSizes = {
  width: 576,
  height: 400,
};

export const RndControl = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { modalBounds, children, setModalBounds, ...rest } = props;

  const handleDragStop: RndDragCallback = (_, d) => {
    setModalBounds(prev => ({ ...prev, position: { x: d.x, y: d.y } }));
  };

  const handleResize: RndResizeCallback = (_, _i, ref, _j, pos) => {
    setModalBounds({
      size: {
        width: ref.style.width,
        height: ref.style.height,
      },
      position: { x: pos.x, y: pos.y },
    });
  };

  return (
    <Root
      dragHandleClassName={SystemClasses.RND_WINDOW_DRAGGABLE}
      minWidth={modalMinSizes.width}
      minHeight={modalMinSizes.height}
      default={{
        x: 0,
        y: 0,
        width: modalMinSizes.width,
        height: modalMinSizes.height,
      }}
      bounds="parent"
      size={{
        width: modalBounds.size.width,
        height: modalBounds.size.height,
        top: modalBounds.position.y,
        left: modalBounds.position.x,
      }}
      position={{ x: modalBounds.position.x, y: modalBounds.position.y }}
      onDragStop={handleDragStop}
      onResize={handleResize}
    >
      <Body {...rest} ref={ref}>
        {children}
      </Body>
    </Root>
  );
});
