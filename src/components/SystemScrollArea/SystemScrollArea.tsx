import { ScrollArea, ScrollAreaProps } from '@mantine/core';

export const SystemScrollArea = (props: ScrollAreaProps) => {
  const { children, ...rest } = props;

  return (
    <ScrollArea
      {...rest}
      type="scroll"
      scrollbarSize={12}
      scrollHideDelay={2000}
      styles={() => ({
        scrollbar: {
          '&, &:hover': {
            background: 'none',
          },
        },
      })}
    >
      {children}
    </ScrollArea>
  );
};
