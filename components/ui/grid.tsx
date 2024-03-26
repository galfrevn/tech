import { cn } from '@/lib/utils';

interface GridBase extends React.PropsWithChildren {
  className?: string;
}

export const Grid = ({ className, children }: GridBase) => {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ', className)}>
      {children}
    </div>
  );
};

export const GridItem = ({ className, children }: GridBase) => {
  return <div className={cn('row-span-1 group/bento ', className)}>{children}</div>;
};
