import { Dispatch, SetStateAction, createContext } from 'react';
import { ListOption } from '../models/ListOption';

export interface SystemModalContextValue {
  opened: boolean;
  currentDirectory: ListOption<string> | null;
  open: () => void;
  close: () => void;
  setCurrentDirectory: Dispatch<SetStateAction<ListOption<string> | null>>;
}

export const SystemModalContext = createContext<SystemModalContextValue | null>(null);
