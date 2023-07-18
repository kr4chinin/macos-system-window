import { MantineProvider } from '@mantine/core';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { SystemModalContextProvider } from './context/SystemModalContextProvider';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <MantineProvider withNormalizeCSS>
    <SystemModalContextProvider>
      <App />
    </SystemModalContextProvider>
  </MantineProvider>
);
