import { MantineProvider } from '@mantine/core';
import { SystemModal } from './components/SystemModal/SystemModal';

const App = () => {
  return (
    <MantineProvider withNormalizeCSS>
      <SystemModal opened onClose={() => {}} />
    </MantineProvider>
  );
};

export { App };
