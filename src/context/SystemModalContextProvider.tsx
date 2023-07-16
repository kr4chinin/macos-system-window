import { useDisclosure } from '@mantine/hooks';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { ListOption } from '../models/ListOption';
import { ModalNavigationState } from '../models/ModalNavigationState';
import { SystemModalContext } from './SystemModalContext';

interface Props {
  children: ReactNode;
}

export const SystemModalContextProvider = (props: Props) => {
  const { children } = props;

  const [currentDirectory, setCurrentDirectory] = useState<ListOption<string> | null>(null);
  const [opened, { close, open }] = useDisclosure(true);

  const [queue, setQueue] = useState<ListOption<string>[]>([]);
  const [queueCursor, setQueueCursor] = useState(-1);

  const [navigationState, setNavigationState] = useState<ModalNavigationState>({
    canGoBack: false,
    canGoForward: false,
  });

  const handleSetCurrentDirectory = useCallback((directory: ListOption<string> | null) => {
    if (directory) {
      setQueue(prev => [...prev, directory]);
    }

    setCurrentDirectory(directory);
    setQueueCursor(prev => prev + 1);
  }, []);

  const goOneDirectoryBack = useCallback(() => {
    if (queueCursor > 0) {
      setQueueCursor(prev => prev - 1);

      setCurrentDirectory(queue[queueCursor - 1]);
    }
  }, [queueCursor, queue]);

  const goOneDirectoryForward = useCallback(() => {
    if (queueCursor < queue.length - 1) {
      setQueueCursor(prev => prev + 1);

      setCurrentDirectory(queue[queueCursor + 1]);
    }
  }, [queueCursor, queue]);

  useEffect(() => {
    setNavigationState({
      canGoBack: queueCursor > 0,
      canGoForward: queueCursor < queue.length - 1,
    });
  }, [queueCursor, queue]);

  return (
    <SystemModalContext.Provider
      value={{
        opened,
        currentDirectory,
        queue,
        navigationState,
        open,
        close,
        setCurrentDirectory: handleSetCurrentDirectory,
        goOneDirectoryBack,
        goOneDirectoryForward,
      }}
    >
      {children}
    </SystemModalContext.Provider>
  );
};
