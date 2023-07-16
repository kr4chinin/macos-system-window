import { createContext } from 'react';
import { ListOption } from '../models/ListOption';
import { ModalNavigationState } from '../models/ModalNavigationState';

export interface SystemModalContextValue {
  opened: boolean;
  currentDirectory: ListOption<string> | null;
  queue: ListOption<string>[];
  navigationState: ModalNavigationState;
  open: () => void;
  close: () => void;
  setCurrentDirectory: (directory: ListOption<string> | null) => void;
  goOneDirectoryBack: () => void;
  goOneDirectoryForward: () => void;
}

export const SystemModalContext = createContext<SystemModalContextValue | null>(null);
