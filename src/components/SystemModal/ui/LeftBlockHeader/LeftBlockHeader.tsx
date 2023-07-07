import { styled } from 'styled-components';
import { SystemClasses } from '../../../../models/SystemClasses';
import { ControlRoundButton } from '../ControlRoundButton/ControlRoundButton';

const Root = styled.div`
  padding: 24px 16px;
`;

const ControlsWrapper = styled.div`
  width: fit-content;

  display: flex;
  align-items: center;
  gap: 8px;

  .${SystemClasses.CONTROL_ROUND_BUTTON} {
    svg {
      visibility: hidden;
    }
  }

  &:hover {
    .${SystemClasses.CONTROL_ROUND_BUTTON} {
      svg {
        visibility: visible;
      }
    }
  }
`;

interface Props {
  onClose: () => void;
}

export const LeftBlockHeader = (props: Props) => {
  const { onClose } = props;

  return (
    <Root className={SystemClasses.RND_WINDOW_DRAGGABLE}>
      <ControlsWrapper>
        <ControlRoundButton variant="close" onClick={onClose} />
        <ControlRoundButton variant="minimize" />
        <ControlRoundButton variant="expand" />
      </ControlsWrapper>
    </Root>
  );
};
