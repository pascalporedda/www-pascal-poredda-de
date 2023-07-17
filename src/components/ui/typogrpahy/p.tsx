import { cn } from '@/lib/utils';
import { TypographyProps } from './typo-props';

export function TypographyP({ children, className }: TypographyProps) {
  return (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}>
      {children}
    </p>
  );
}
