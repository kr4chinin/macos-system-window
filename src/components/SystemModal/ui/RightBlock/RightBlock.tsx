import { Panel } from 'react-resizable-panels';
import { styled } from 'styled-components';

const StyledPanel = styled(Panel)`
  background-color: #201f2d;
`;

export const RightBlock = () => {
  return (
    <StyledPanel defaultSize={70} maxSize={90} minSize={50}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias doloribus cupiditate
      consequuntur ab illo ipsam fuga maiores ipsa dicta non, esse incidunt facilis beatae quia iure
      provident, inventore et quasi ullam asperiores magni. Impedit tenetur fugiat expedita tempora
      harum praesentium.
    </StyledPanel>
  );
};
