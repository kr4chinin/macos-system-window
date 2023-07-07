import { styled } from 'styled-components';
import { SystemClasses } from '../../../../models/SystemClasses';
import { TrafficLightButton } from '../TrafficLightButton/TrafficLightButton';

const Root = styled.div`
  padding: 20px 20px 18px;
`;

const TrafficLights = styled.div`
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
      <TrafficLights>
        <TrafficLightButton variant="close" onClick={onClose} />
        <TrafficLightButton variant="minimize" />
        <TrafficLightButton variant="expand" />
      </TrafficLights>
    </Root>
  );
};
