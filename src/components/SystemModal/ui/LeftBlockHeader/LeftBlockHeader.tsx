import { styled } from 'styled-components';
import {
  CONTROL_ROUND_BUTTON_CLASS,
  ControlRoundButton,
} from '../ControlRoundButton/ControlRoundButton';

const Root = styled.div`
  padding: 16px;
`;

const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .${CONTROL_ROUND_BUTTON_CLASS} {
    svg {
      visibility: hidden;
    }
  }

  &:hover {
    .${CONTROL_ROUND_BUTTON_CLASS} {
      svg {
        visibility: visible;
      }
    }
  }
`;

export const LeftBlockHeader = () => {
  return (
    <Root>
      <ControlsWrapper>
        <ControlRoundButton variant="close" />
        <ControlRoundButton variant="minimize" />
        <ControlRoundButton variant="expand" />
      </ControlsWrapper>
    </Root>
  );
};
