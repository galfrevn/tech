import { cn } from '@/lib/utils';

type CounterView = { slug: string; count: number };
interface CounterProps extends Pick<CounterView, 'slug'> {
  allViews: Array<CounterView>;
  trackView?: boolean;
}

export function Counter({ slug, allViews }: CounterProps) {
  const viewsForSlug = allViews && allViews.find((view) => view.slug === slug);
  const number = new Number(viewsForSlug?.count || 0);

  return <p className='text-neutral-600 dark:text-neutral-400 animate-appear'>{`${number.toLocaleString()} views`}</p>;
}

interface CounterSkeletonProps {
  className?: string;
}

export function CounterSkeleton({ className }: CounterSkeletonProps) {
  return (
    <div className={cn('w-16 h-4 my-1 bg-foreground/10 rounded-xl animate-[pulse_3s_ease-in-out_infinite]', className)} />
  );
}
