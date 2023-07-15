import { faker } from '@faker-js/faker';
import { capitalizeFirstLetter } from '../../../helpers/capitalizeFirstLetter';
import { createArrayWithRandLength } from '../../../helpers/createArray';
import { FolderItem } from '../../../models/FolderItem';

export const makeFolderItems = (): FolderItem[] => {
  return createArrayWithRandLength(16, 56).map((_, idx) => {
    const name = capitalizeFirstLetter(faker.word.noun({ length: { min: 4, max: 16 } }));

    return {
      id: `${idx}__${name}}`,
      name,
    };
  });
};
