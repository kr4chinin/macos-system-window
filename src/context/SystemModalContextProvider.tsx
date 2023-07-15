import { useDisclosure } from '@mantine/hooks';
import { ReactNode, useState } from 'react';
import { SystemModalContext } from './SystemModalContext';
import { ListOption } from '../models/ListOption';

interface Props {
  children: ReactNode;
}

export const SystemModalContextProvider = (props: Props) => {
  const { children } = props;

  const [currentDirectory, setCurrentDirectory] = useState<ListOption<string> | null>(null);
  const [opened, { close, open }] = useDisclosure(true);

  return (
    <SystemModalContext.Provider
      value={{ opened, currentDirectory, open, close, setCurrentDirectory }}
    >
      {children}
    </SystemModalContext.Provider>
  );
};
