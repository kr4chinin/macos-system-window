import { Panel } from 'react-resizable-panels';
import { styled } from 'styled-components';
import { RightBlockContent } from '../RightBlockContent/RightBlockContent';
import { RightBlockHeader } from '../RightBlockHeader/RightBlockHeader';

const StyledPanel = styled(Panel)`
  height: 100%;

  background-color: var(--modal-background);
`;

interface Props {
  leftPanelCollapsed: boolean;
  toggleFullPage: () => void;
}

export const RightBlock = (props: Props) => {
  const { leftPanelCollapsed, toggleFullPage } = props;

  return (
    <StyledPanel defaultSize={70} maxSize={100}>
      <RightBlockHeader leftPanelCollapsed={leftPanelCollapsed} toggleFullPage={toggleFullPage} />
      <RightBlockContent />
    </StyledPanel>
  );
};
