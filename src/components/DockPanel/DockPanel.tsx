import { styled } from 'styled-components';

import { DockElement } from './ui/DockElement/DockElement';
import { DockDelimiter } from './ui/DockDelimiter/DockDelimiter';

const Root = styled.div`
  position: fixed;
  left: 50%;
  bottom: 4px;

  display: flex;
  align-items: center;
  gap: 3px;

  padding: 8px 8px 5px;

  border-radius: 24px;
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(25px);
`;

export const DockPanel = () => {
  return (
    <Root>
      <DockElement tooltipLabel="Finder" src="/img/finder.png" alt="Finder" />
      <DockElement tooltipLabel="Books" src="/img/books.png" alt="Books" />
      <DockElement tooltipLabel="Calendar" src="/img/calendar.png" alt="Calendar" />

      <DockDelimiter />

      <DockElement tooltipLabel="Trash" size="small" src="/img/trash.png" alt="Trash" />
    </Root>
  );
};
