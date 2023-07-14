import { useContext } from 'react';
import { SystemModalContext } from './SystemModalContext';

export const useSystemModalContext = () => {
  const context = useContext(SystemModalContext);

  if (!context) {
    throw new Error('useSystemModalContext called outside of SystemModalContextProvider');
  }

  return context;
};
