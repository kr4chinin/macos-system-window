import { Panel } from 'react-resizable-panels';
import { styled } from 'styled-components';

const StyledPanel = styled(Panel)`
  background-color: var(--modal-background);
`;

export const RightBlock = () => {
  return <StyledPanel defaultSize={70} maxSize={90} minSize={50}></StyledPanel>;
};
