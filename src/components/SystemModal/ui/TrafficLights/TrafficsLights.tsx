import { memo } from 'react';
import { styled } from 'styled-components';
import { SystemClasses } from '../../../../models/SystemClasses';
import { TrafficLightButton } from '../TrafficLightButton/TrafficLightButton';

const Root = styled.div`
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
  toggleFullPage: () => void;
}

export const TrafficsLights = memo((props: Props) => {
  const { onClose, toggleFullPage } = props;

  return (
    <Root>
      <TrafficLightButton variant="close" onClick={onClose} />
      <TrafficLightButton variant="minimize" />
      <TrafficLightButton variant="expand" onClick={toggleFullPage} />
    </Root>
  );
});
