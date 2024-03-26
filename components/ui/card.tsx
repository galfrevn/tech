import { cn } from '@/lib/utils';

interface CardProps extends React.PropsWithChildren {
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn('border border-black/[0.2] group/canvas-card dark:border-white/[0.1] p-4 relative', className)}>
      <CardIcon className='absolute h-6 w-6 -top-3 -left-3 dark:text-white/30 text-black/30' />
      <CardIcon className='absolute h-6 w-6 -bottom-3 -left-3 dark:text-white/30 text-black/30' />
      <CardIcon className='absolute h-6 w-6 -top-3 -right-3 dark:text-white/30 text-black/30' />
      <CardIcon className='absolute h-6 w-6 -bottom-3 -right-3 dark:text-white/30 text-black/30' />

      {children}
    </div>
  );
}

interface CardIconProps extends React.SVGProps<SVGSVGElement> {}

export function CardIcon({ className, ...rest }: CardIconProps) {
  return (
    <svg fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className={className} {...rest}>
      <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m6-6H6' />
    </svg>
  );
}
