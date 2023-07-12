import { HoverCard } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import { css, styled } from 'styled-components';

interface RootProps {
  $active: boolean;
  $icon?: boolean;
}

const Root = styled.button<RootProps>`
  background: none;
  border: none;

  border-radius: 4px;
  padding: ${p => (p.$icon ? '0 16px' : '4px 8px 3px')};

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }

  ${p =>
    p.$active &&
    css`
      background-color: rgba(255, 255, 255, 0.15);
    `}
`;

const StyledDropdown = styled(HoverCard.Dropdown)<{ $width?: CSSProperties['width'] }>`
  // to override mantine inline styles
  width: ${p => p.$width ?? 'auto'} !important;

  padding: 4px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(30px);
  background-color: rgba(40, 40, 40, 0.6);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
`;

interface Props extends HTMLAttributes<HTMLButtonElement> {
  target: ReactNode;
  icon?: boolean;
  dropdownWidth?: CSSProperties['width'];
}

export const NavbarElement = (props: Props) => {
  const { target, children, icon, dropdownWidth, ...rest } = props;

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <HoverCard position="bottom-start" offset={4} onOpen={open} onClose={close}>
      <HoverCard.Target>
        <Root {...rest} type="button" $active={opened} $icon={icon}>
          {target}
        </Root>
      </HoverCard.Target>

      <StyledDropdown $width={dropdownWidth}>{children}</StyledDropdown>
    </HoverCard>
  );
};
