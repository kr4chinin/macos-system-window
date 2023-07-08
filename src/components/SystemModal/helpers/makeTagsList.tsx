import { CSSProperties } from 'react';
import { styled } from 'styled-components';
import { ReactComponent as AllTags } from '../../../assets/icons/SystemModal/all_tags.svg';
import { ReactComponent as TagIcon } from '../../../assets/icons/SystemModal/tag.svg';
import { ListOption } from '../../../models/ListOption';

type TagColorVariant = 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'gray';

interface TagInfo {
  label: string;
  color: CSSProperties['color'];
}

const tagInfos: Record<TagColorVariant, TagInfo> = {
  red: { label: 'Red', color: '#ff6160' },
  yellow: { label: 'Yellow', color: '#ffe62d' },
  green: { label: 'Green', color: '#33f45d' },
  blue: { label: 'Blue', color: '#117eff' },
  purple: { label: 'Purple', color: '#e076ff' },
  gray: { label: 'Gray', color: '#9b98b0' },
};

const TagWrapper = styled.div<{ color: TagColorVariant }>`
  width: 16px;
  height: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg path {
    fill: ${p => tagInfos[p.color].color};
  }
`;

export const makeTagsList = (): ListOption<string>[] => [
  ...Object.entries(tagInfos).map(([color, { label }], idx) => ({
    label,
    value: `${color}_${idx}`,
    icon: (
      <TagWrapper color={color as TagColorVariant}>
        <TagIcon />
      </TagWrapper>
    ),
  })),
  {
    label: 'All Tags...',
    value: 'all_tags',
    icon: <AllTags />,
  },
];
