import { MantineProvider } from '@mantine/core';
import { SystemModal } from './components/SystemModal/SystemModal';
import { Navbar } from './components/Navbar/Navbar';
import { styled } from 'styled-components';
import { DockPanel } from './components/DockPanel/DockPanel';

const Root = styled.div`
  height: 100dvh;

  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  flex: 1;
`;

const App = () => {
  return (
    <MantineProvider withNormalizeCSS>
      <Root>
        <Navbar />

        <Content>
          <SystemModal opened onClose={() => {}} />
        </Content>

        <DockPanel />
      </Root>
    </MantineProvider>
  );
};

export { App };
