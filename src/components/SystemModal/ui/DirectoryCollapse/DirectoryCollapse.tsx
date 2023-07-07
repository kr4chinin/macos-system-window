import { Collapse } from '@mantine/core';
import { ComponentPropsWithoutRef } from 'react';
import { styled } from 'styled-components';
import { ListOption } from '../../../../models/ListOption';

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 11px;
  font-weight: 700;
  color: var(--gray-60);
`;

const List = styled.ul`
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

  padding: 6px 8px;
`;

const IconWrapper = styled.div`
  width: 16px;
  height: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const StyledCollapse = styled(Collapse)``;

type OmittedCollapseProps = Omit<ComponentPropsWithoutRef<typeof Collapse>, 'children'>;

interface Props extends OmittedCollapseProps {
  title: string;
  listOptions: ListOption<string>[];
}

export const DirectoryCollapse = (props: Props) => {
  const { title, listOptions, ...rest } = props;

  return (
    <Root>
      <Title>{title}</Title>

      <StyledCollapse {...rest}>
        <List>
          {listOptions.map(o => (
            <Item key={o.value}>
              {o.icon && <IconWrapper>{o.icon}</IconWrapper>}
              {o.label}
            </Item>
          ))}
        </List>
      </StyledCollapse>
    </Root>
  );
};
