import { PanelResizeHandle } from 'react-resizable-panels';
import styled from 'styled-components';

export const ResizeHandler = styled(PanelResizeHandle)<{ hidden: boolean }>`
  position: relative;

  border-right: 1px solid var(--border-dark);

  display: ${p => (p.hidden ? 'none' : 'block')};

  // we use this pseudo-elements to make it easier to click on the resize handler
  &::after {
    content: '';

    position: absolute;
    top: 0;
    left: 0;

    height: 100%;
    width: 2px;
  }

  &::before {
    content: '';

    position: absolute;
    top: 0;
    left: -3px;

    height: 100%;
    width: 2px;
  }
`;
