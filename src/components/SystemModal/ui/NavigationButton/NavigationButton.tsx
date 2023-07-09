import { ButtonHTMLAttributes } from 'react';
import { styled } from 'styled-components';
import { ReactComponent as BackIcon } from '../../../../assets/icons/SystemModal/back.svg';

const Root = styled.button<{ rotated: boolean }>`
  padding: 0;
  border: none;
  background: none;

  width: 32px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  border-radius: 4px;

  transform: ${p => (p.rotated ? 'rotate(180deg)' : 'none')};

  &:hover:not(:disabled) {
    background-color: #43424c;
  }

  &:disabled {
    svg path {
      fill: rgb(91, 90, 100);
    }
  }
`;

type NavigationButtonVariant = 'back' | 'forward';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: NavigationButtonVariant;
}

const NavigationButton = (props: Props) => {
  const { variant, ...rest } = props;

  return (
    <Root rotated={variant === 'forward'} {...rest}>
      <BackIcon />
    </Root>
  );
};

export { NavigationButton };
