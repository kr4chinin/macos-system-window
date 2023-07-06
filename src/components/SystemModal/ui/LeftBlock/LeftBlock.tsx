import { Panel } from 'react-resizable-panels';
import { styled } from 'styled-components';
import { LeftBlockHeader } from '../LeftBlockHeader/LeftBlockHeader';

const Root = styled(Panel)`
  display: flex;
  flex-direction: column;

  background-color: #292836;

  color: #63616f;
`;

interface Props {
  onClose: () => void;
}

export const LeftBlock = (props: Props) => {
  const { onClose } = props;

  return (
    <Root defaultSize={30} maxSize={50} minSize={10}>
      <LeftBlockHeader />
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis eum minus harum fugiat
      accusamus eos dicta cum vero amet vel distinctio et doloremque voluptates quo saepe,
      laudantium modi ex praesentium? Fugiat ipsam facere itaque laborum recusandae totam incidunt
      aspernatur tenetur.
    </Root>
  );
};
