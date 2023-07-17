import { cn } from '@/lib/utils';
import { TypographyProps } from './typo-props';

export function TypographyH1({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn(
        className,
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      )}>
      {children}
    </h1>
  );
}
