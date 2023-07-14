import { styled } from 'styled-components';

import { DockDelimiter } from './ui/DockDelimiter/DockDelimiter';
import { DockElement } from './ui/DockElement/DockElement';

const Root = styled.div`
  position: fixed;
  bottom: 4px;

  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
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
      <Content>
        <DockElement tooltipLabel="Finder" src="/img/finder.png" alt="Finder" />
        <DockElement tooltipLabel="Books" src="/img/books.png" alt="Books" />
        <DockElement tooltipLabel="Calendar" src="/img/calendar.png" alt="Calendar" />

        <DockDelimiter />

        <DockElement tooltipLabel="Trash" size="small" src="/img/trash.png" alt="Trash" />
      </Content>
    </Root>
  );
};
