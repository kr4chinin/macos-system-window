import { Panel } from 'react-resizable-panels';
import { styled } from 'styled-components';

const Root = styled(Panel)`
  display: flex;
  flex-direction: column;
  flex: 1;

  background-color: rgb(41, 40, 54);

  color: rgb(99, 97, 111);
`;

interface Props {
  onClose: () => void;
}

export const LeftBlock = (props: Props) => {
  const { onClose } = props;

  return (
    <Root defaultSize={30} maxSize={50} minSize={10}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis eum minus harum fugiat
      accusamus eos dicta cum vero amet vel distinctio et doloremque voluptates quo saepe,
      laudantium modi ex praesentium? Fugiat ipsam facere itaque laborum recusandae totam incidunt
      aspernatur tenetur.
    </Root>
  );
};
