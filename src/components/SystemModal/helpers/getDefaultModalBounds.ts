import { ModalBounds } from '../../../models/ModalBounds';
import { ModalPosition } from '../../../models/ModalPosition';

const windowInnerHeight = window.innerHeight;

const defaultModalSize = {
  width: 850,
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
