import { ButtonHTMLAttributes, CSSProperties } from 'react';
import { styled } from 'styled-components';

const Root = styled.button<{ $width: CSSProperties['width'] }>`
  padding: 0;
  border: none;
  background: none;

  width: ${p => p.$width};
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  border-radius: 4px;

  svg path {
    fill: #c0bbc9;
  }

  &:hover:not(:disabled) {
    background-color: #43424c;
  }

  &:disabled {
    svg path {
      fill: #5b5a64;
    }
  }
`;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: CSSProperties['width'];
}

const RightBlockHeaderButton = (props: Props) => {
  const { width = '24px', children, ...rest } = props;

  return (
    <Root $width={width} {...rest}>
      {children}
    </Root>
  );
};

export { RightBlockHeaderButton };
