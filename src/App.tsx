import { styled } from 'styled-components';
import { DockPanel } from './components/DockPanel/DockPanel';
import { Navbar } from './components/Navbar/Navbar';
import { SystemModal } from './components/SystemModal/SystemModal';
import { useSystemModalContext } from './context/useSystemModalContext';

const Root = styled.div`
  height: 100dvh;

  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  flex: 1;
`;

const App = () => {
  const { opened, close } = useSystemModalContext();

  return (
    <Root>
      <Navbar />

      <Content>{opened && <SystemModal opened={opened} onClose={close} />}</Content>

      <DockPanel />
    </Root>
  );
};

export { App };
