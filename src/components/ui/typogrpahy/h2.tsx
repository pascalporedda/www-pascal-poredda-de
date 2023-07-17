import { cn } from '@/lib/utils';
import { TypographyProps } from './typo-props';

export function TypographyH2({ children, className }: TypographyProps) {
  return (
    <h2
      className={cn(
        className,
        'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0',
      )}>
      {children}
    </h2>
  );
}
