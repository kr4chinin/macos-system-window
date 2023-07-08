import { ScrollArea, ScrollAreaProps } from '@mantine/core';

const SystemScrollArea = (props: ScrollAreaProps) => {
  const { children, ...rest } = props;

  return (
    <ScrollArea
      {...rest}
      styles={() => ({
        scrollbar: {
          '&, &:hover': {
            background: 'none',
          },
        },
      })}
      scrollbarSize={12}
    >
      {children}
    </ScrollArea>
  );
};

export { SystemScrollArea };
