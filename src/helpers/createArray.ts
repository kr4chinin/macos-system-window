import { randomBetween } from './randomBetween';

export const createArrayWithRandLength = (min: number, max: number) =>
  Array.from({ length: randomBetween(min, max) }, (_, i) => i);
