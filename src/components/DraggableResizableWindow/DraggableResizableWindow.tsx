import { Dispatch, ReactNode, SetStateAction, forwardRef } from 'react';
import { Rnd, RndDragCallback, RndResizeCallback } from 'react-rnd';
import styled from 'styled-components';
import { ModalBounds } from '../../models/ModalBounds';

const Root = styled(Rnd)`
  // we use important to override react-rnd inline styles
  display: flex !important;

  overflow: hidden;
  pointer-events: all;
  flex-direction: column;

  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #6b6a73;
  box-shadow: 0 88px 48px rgba(146, 151, 176, 0.01), 0 64px 40px rgba(146, 151, 176, 0.05),
    0 32px 32px rgba(146, 151, 176, 0.09), 0 8px 16px rgba(146, 151, 176, 0.1);
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

export const DraggableResizableWindow = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { modalBounds, children, setModalBounds, ...rest } = props;

  const handleDragStop: RndDragCallback = (_, d) => {
    setModalBounds(prev => ({ ...prev, position: { x: d.x, y: d.y } }));
  };

  const handleResizeStop: RndResizeCallback = (_, _i, ref, _j, pos) => {
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
      // dragHandleClassName={'.some-class'}
      minWidth={modalMinSizes.width}
      minHeight={modalMinSizes.height}
      default={{
        x: 0,
        y: 0,
        width: modalMinSizes.width,
        height: modalMinSizes.height,
      }}
      bounds="window"
      size={{
        width: modalBounds.size.width,
        height: modalBounds.size.height,
        top: modalBounds.position.y,
        left: modalBounds.position.x,
      }}
      position={{ x: modalBounds.position.x, y: modalBounds.position.y }}
      onDragStop={handleDragStop}
      onResizeStop={handleResizeStop}
    >
      <Body {...rest} ref={ref}>
        {children}
      </Body>
    </Root>
  );
});
