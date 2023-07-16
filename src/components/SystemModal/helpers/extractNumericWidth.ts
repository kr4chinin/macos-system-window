import { CSSProperties } from 'react';

export const extractNumericWidth = (width: CSSProperties['width']): number => {
  if (typeof width === 'number') {
    return width;
  }

  if (typeof width === 'string' && width.includes('px')) {
    return Number(width.replace('px', ''));
  }

  throw new Error(`Invalid width format, unable to convert to numeric type: ${width}`);
};
