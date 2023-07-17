import { TypographyProps } from './typo-props';
import { cn } from '@/lib/utils';

export function TypographyBlockquote({ children, className }: TypographyProps) {
  return (
    <blockquote className={cn('mt-6 border-l-2 pl-6 italic', className)}>
      {children}
    </blockquote>
  );
}
