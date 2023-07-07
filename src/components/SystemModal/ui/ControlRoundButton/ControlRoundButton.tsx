import { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import { styled } from 'styled-components';
import { ReactComponent as CloseIcon } from '../../../../assets/icons/SystemModal/close.svg';
import { ReactComponent as ExpandIcon } from '../../../../assets/icons/SystemModal/expand.svg';
import { ReactComponent as MinimizeIcon } from '../../../../assets/icons/SystemModal/minimize.svg';
import { SystemClasses } from '../../../../models/SystemClasses';

interface BackgroundColorVariant {
  bgColor: CSSProperties['backgroundColor'];
  activeBgColor: CSSProperties['backgroundColor'];
}

const roundButtonColors: Record<ControlRoundButtonVariant, BackgroundColorVariant> = {
  close: {
    bgColor: '#ed6a5e',
    activeBgColor: '#f0938a',
  },
  minimize: {
    bgColor: '#f5bf4f',
    activeBgColor: '#fcea74',
  },
  expand: {
    bgColor: '#61c554',
    activeBgColor: '#8de58e',
  },
};

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

  background-color: ${p => roundButtonColors[p.variant].bgColor};

  &:active {
    background-color: ${p => roundButtonColors[p.variant].activeBgColor};
  }
`;

type ControlRoundButtonVariant = 'close' | 'minimize' | 'expand';

type OmittedHTMLButtonAttributes = Omit<HTMLAttributes<HTMLButtonElement>, 'className'>;

interface Props extends OmittedHTMLButtonAttributes {
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

export const ControlRoundButton = (props: Props) => {
  const { variant, ...rest } = props;

  return (
    <Root {...rest} type="button" className={SystemClasses.CONTROL_ROUND_BUTTON} variant={variant}>
      {getIcon(variant)}
    </Root>
  );
};
