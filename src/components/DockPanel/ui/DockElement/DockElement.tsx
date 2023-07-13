import { Tooltip } from '@mantine/core';
import { ImgHTMLAttributes } from 'react';
import { styled } from 'styled-components';

const Root = styled.div`
  width: 76px;
  height: 76px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

type OmittedImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height'>;

type ImageSize = 'small' | 'medium';

const imageSizes: Record<ImageSize, string> = {
  small: '62px',
  medium: '76px',
};

interface Props extends OmittedImageProps {
  tooltipLabel: string;
  size?: ImageSize;
}

export const DockElement = (props: Props) => {
  const { tooltipLabel, size = 'medium', alt, ...rest } = props;

  const imageSize = imageSizes[size];

  return (
    <Tooltip label={tooltipLabel} withArrow>
      <Root>
        <img {...rest} alt={alt} width={imageSize} height={imageSize} />
      </Root>
    </Tooltip>
  );
};
