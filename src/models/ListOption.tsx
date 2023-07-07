import { ReactNode } from 'react';

export interface ListOption<T> {
  label: string;
  value: T;
  icon?: ReactNode;
}
