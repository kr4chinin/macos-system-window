import { ButtonHTMLAttributes } from 'react';
import { ReactComponent as SearchIcon } from '../../../../assets/icons/SystemModal/search.svg';
import { RightBlockHeaderButton } from '../RightBlockHeaderButton/RightBlockHeaderButton';

export const SearchButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <RightBlockHeaderButton disabled width="24px" {...props}>
      <SearchIcon />
    </RightBlockHeaderButton>
  );
};
