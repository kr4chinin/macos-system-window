import { Panel } from 'react-resizable-panels';
import { styled } from 'styled-components';
import { RightBlockHeader } from '../RightBlockHeader/RightBlockHeader';

const StyledPanel = styled(Panel)`
  background-color: var(--modal-background);
`;

export const RightBlock = () => {
  return (
    <StyledPanel defaultSize={70} maxSize={100}>
      <RightBlockHeader />
    </StyledPanel>
  );
};
