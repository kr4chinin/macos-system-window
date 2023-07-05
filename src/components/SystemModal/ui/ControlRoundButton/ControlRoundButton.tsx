import { HTMLAttributes, ReactNode } from 'react';
import { css, styled } from 'styled-components';
import { ReactComponent as CloseIcon } from '../../../../assets/icons/SystemModal/close.svg';
import { ReactComponent as MinimizeIcon } from '../../../../assets/icons/SystemModal/minimize.svg';
import { ReactComponent as ExpandIcon } from '../../../../assets/icons/SystemModal/expand.svg';

const Root = styled.button<{ variant: ControlRoundButtonVariant }>`
  border: none;
  background: none;
  padding: 0;

  width: 12px;
  height: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  border-radius: 50%;

  ${p =>
    p.variant === 'close' &&
    css`
      background-color: rgb(237, 106, 94);
    `}

  ${p =>
    p.variant === 'minimize' &&
    css`
      background-color: rgb(245, 191, 79);
    `}

  ${p =>
    p.variant === 'expand' &&
    css`
      background-color: rgb(97, 197, 84);
    `}
`;

type ControlRoundButtonVariant = 'close' | 'minimize' | 'expand';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant: ControlRoundButtonVariant;
}

const getIcon = (variant: ControlRoundButtonVariant): ReactNode => {
  switch (variant) {
    case 'close':
      return <CloseIcon />;
    case 'minimize':
      return <MinimizeIcon />;
    case 'expand':
      return <ExpandIcon />;
  }
};

const ControlRoundButton = (props: Props) => {
  const { variant, ...rest } = props;

  return (
    <Root {...rest} type="button" variant={variant}>
      {getIcon(variant)}
    </Root>
  );
};

export { ControlRoundButton };
