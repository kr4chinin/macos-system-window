import { styled } from 'styled-components';
import { SystemClasses } from '../../../../models/SystemClasses';
import { TrafficsLights } from '../TrafficLights/TrafficsLights';

const Root = styled.div<{ $hasBorderBottom: boolean }>`
  height: var(--modal-header-height);

  padding: 20px 20px 18px;
  border-bottom: 1px solid ${p => (p.$hasBorderBottom ? 'var(--border-dark)' : 'transparent')};
  transition: border-bottom 0.2s ease-in-out;
`;

interface Props {
  contentScrolled: boolean;
  onClose: () => void;
  toggleFullPage: () => void;
}

export const LeftBlockHeader = (props: Props) => {
  const { contentScrolled, onClose, toggleFullPage } = props;

  return (
    <Root className={SystemClasses.RND_WINDOW_DRAGGABLE} $hasBorderBottom={contentScrolled}>
      <TrafficsLights onClose={onClose} toggleFullPage={toggleFullPage} />
    </Root>
  );
};
