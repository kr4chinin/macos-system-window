import { Panel } from 'react-resizable-panels';
import { css, styled } from 'styled-components';
import { LeftBlockHeader } from '../LeftBlockHeader/LeftBlockHeader';

const Root = styled(Panel)<{ modalFocused: boolean }>`
  display: flex;
  flex-direction: column;

  background-color: #292836;

  color: #63616f;

  ${p =>
    p.modalFocused &&
    css`
      background-color: rgba(41, 40, 54, 0.4);
      backdrop-filter: blur(8px);
    `}
`;

interface Props {
  modalFocused: boolean;
  onClose: () => void;
}

export const LeftBlock = (props: Props) => {
  const { modalFocused, onClose } = props;

  return (
    <Root modalFocused={modalFocused} defaultSize={30} maxSize={50} minSize={10}>
      <LeftBlockHeader />
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis eum minus harum fugiat
      accusamus eos dicta cum vero amet vel distinctio et doloremque voluptates quo saepe,
      laudantium modi ex praesentium? Fugiat ipsam facere itaque laborum recusandae totam incidunt
      aspernatur tenetur.
    </Root>
  );
};
