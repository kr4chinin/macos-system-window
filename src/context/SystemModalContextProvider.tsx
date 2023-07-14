import { useDisclosure } from '@mantine/hooks';
import { ReactNode } from 'react';
import { SystemModalContext } from './SystemModalContext';

interface Props {
  children: ReactNode;
}

export const SystemModalContextProvider = (props: Props) => {
  const { children } = props;

  const [opened, { close, open }] = useDisclosure(true);

  return (
    <SystemModalContext.Provider value={{ opened, open, close }}>
      {children}
    </SystemModalContext.Provider>
  );
};
