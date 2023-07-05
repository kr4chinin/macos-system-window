import { styled } from 'styled-components';
import { ControlRoundButton } from '../ControlRoundButton/ControlRoundButton';

const Root = styled.div`
  padding: 16px;
`;

const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
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
