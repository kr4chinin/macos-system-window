import { Collapse } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ComponentPropsWithoutRef } from 'react';
import { styled } from 'styled-components';
import { ReactComponent as CollapseIcon } from '../../../../assets/icons/SystemModal/collapse.svg';
import { ListOption } from '../../../../models/ListOption';
import { noUserSelect } from '../../../mixins/noUserSelect';
import { truncate } from '../../../mixins/truncate';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  font-size: 11px;
  font-weight: 700;
  color: var(--gray-60);

  ${noUserSelect}

  svg {
    visibility: hidden;
  }

  &:hover svg {
    visibility: visible;
  }
`;

const CollapseIconWrapper = styled.button<{ $opened: boolean }>`
  padding: 0;
  border: none;
  background: none;

  width: 14px;
  height: 14px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  transform: rotate(${p => (p.$opened ? 0 : -90)}deg);

  &:active {
    svg path {
      fill: #9d94c7;
    }
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.08px;

  padding: 6px;
`;

const ItemLabel = styled.span`
  ${truncate}
`;

const IconWrapper = styled.div`
  width: 16px;
  height: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

type OmittedCollapseProps = Omit<ComponentPropsWithoutRef<typeof Collapse>, 'children' | 'in'>;

interface Props extends OmittedCollapseProps {
  title: string;
  listOptions: ListOption<string>[];
  defaultOpened?: boolean;
}

export const DirectoryCollapsibleList = (props: Props) => {
  const { title, listOptions, defaultOpened = true, ...rest } = props;

  const [opened, { toggle }] = useDisclosure(defaultOpened);

  return (
    <Root>
      <Title onClick={toggle}>
        {title}

        <CollapseIconWrapper $opened={opened}>
          <CollapseIcon />
        </CollapseIconWrapper>
      </Title>

      <Collapse {...rest} in={opened}>
        <List>
          {listOptions.map(o => (
            <Item key={o.value}>
              {o.icon && <IconWrapper>{o.icon}</IconWrapper>}

              <ItemLabel>{o.label}</ItemLabel>
            </Item>
          ))}
        </List>
      </Collapse>
    </Root>
  );
};
