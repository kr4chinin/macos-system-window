import { styled } from 'styled-components';
import { SystemClasses } from '../../../../models/SystemClasses';
import { TrafficLightButton } from '../TrafficLightButton/TrafficLightButton';

const Root = styled.div<{ $hasBorderBottom: boolean }>`
  height: var(--modal-header-height);

  padding: 20px 20px 18px;
  border-bottom: 1px solid ${p => (p.$hasBorderBottom ? 'var(--border-dark)' : 'transparent')};
  transition: border-bottom 0.2s ease-in-out;
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
  contentScrolled: boolean;
  onClose: () => void;
}

export const LeftBlockHeader = (props: Props) => {
  const { contentScrolled, onClose } = props;

  return (
    <Root className={SystemClasses.RND_WINDOW_DRAGGABLE} $hasBorderBottom={contentScrolled}>
      <TrafficLights>
        <TrafficLightButton variant="close" onClick={onClose} />
        <TrafficLightButton variant="minimize" />
        <TrafficLightButton variant="expand" />
      </TrafficLights>
    </Root>
  );
};
