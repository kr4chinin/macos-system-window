import { ButtonHTMLAttributes } from 'react';
import { styled } from 'styled-components';
import { ReactComponent as BackIcon } from '../../../../assets/icons/SystemModal/back.svg';
import { RightBlockHeaderButton } from '../RightBlockHeaderButton/RightBlockHeaderButton';

const BackIconWrapper = styled.div<{ $rotated: boolean }>`
  width: 18px;
  height: 18px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  transform: ${p => (p.$rotated ? 'rotate(180deg)' : 'none')};
`;

type NavigationButtonVariant = 'back' | 'forward';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: NavigationButtonVariant;
}

export const NavigationButton = (props: Props) => {
  const { variant, ...rest } = props;

  return (
    <RightBlockHeaderButton width="32px" {...rest}>
      <BackIconWrapper $rotated={variant === 'forward'}>
        <BackIcon />
      </BackIconWrapper>
    </RightBlockHeaderButton>
  );
};
