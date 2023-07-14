import { createContext } from 'react';

export interface SystemModalContextValue {
  opened: boolean;
  open: () => void;
  close: () => void;
}

export const SystemModalContext = createContext<SystemModalContextValue | null>(null);
