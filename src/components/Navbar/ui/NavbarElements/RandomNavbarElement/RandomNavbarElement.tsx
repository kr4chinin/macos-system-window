import { faker } from '@faker-js/faker';
import { memo } from 'react';
import { ReactComponent as MenuBarIcon } from '../../../../../assets/icons/Navbar/menu_bar.svg';
import { capitalizeFirstLetter } from '../../../../../helpers/capitalizeFirstLetter';
import { createArrayWithRandLength } from '../../../../../helpers/createArray';
import { NavbarMenuDelimiter } from '../../NavbarMenuDelimiter/NavbarMenuDelimiter';
import { NavbarMenuItem } from '../../NavbarMenuItem/NavbarMenuItem';
import { NavbarMenuList } from '../../NavbarMenuList/NavbarMenuList';
import { NavbarElement } from '../NavbarElement/NavbarElement';
import { NavbarElementTitle } from '../NavbarElementTitle/NavbarElementTitle';

interface Props {
  title: string;
}

const createRandomNoun = (): string =>
  capitalizeFirstLetter(faker.word.noun({ length: { min: 6, max: 32 } }));

export const RandomNavbarElement = memo((props: Props) => {
  const { title } = props;

  return (
    <NavbarElement target={<NavbarElementTitle>{title}</NavbarElementTitle>} dropdownWidth="205px">
      <NavbarMenuList>
        {createArrayWithRandLength(2, 3).map((_, idx) => (
          <NavbarMenuItem key={idx}>{createRandomNoun()}</NavbarMenuItem>
        ))}

        <NavbarMenuDelimiter />

        {createArrayWithRandLength(1, 2).map((_, idx) => (
          <NavbarMenuItem key={idx} rightContent={idx % 2 === 0 ? '⌥⇧⌘⌃Q' : '⌘⌃Q'}>
            {createRandomNoun()}
          </NavbarMenuItem>
        ))}

        <NavbarMenuDelimiter />

        {createArrayWithRandLength(2, 4).map((_, idx) => (
          <NavbarMenuItem key={idx} rightContent={(idx + 1) % 3 === 0 && <MenuBarIcon />}>
            {createRandomNoun()}
          </NavbarMenuItem>
        ))}

        <NavbarMenuDelimiter />

        {createArrayWithRandLength(1, 1).map((_, idx) => (
          <NavbarMenuItem key={idx} rightContent={<MenuBarIcon />}>
            {createRandomNoun()}
          </NavbarMenuItem>
        ))}

        <NavbarMenuDelimiter />

        {createArrayWithRandLength(4, 4).map((_, idx) => (
          <NavbarMenuItem key={idx} light={idx === 3} rightContent={idx === 4 && <MenuBarIcon />}>
            {createRandomNoun() + (idx === 3 ? '...' : '')}
          </NavbarMenuItem>
        ))}
      </NavbarMenuList>
    </NavbarElement>
  );
});
