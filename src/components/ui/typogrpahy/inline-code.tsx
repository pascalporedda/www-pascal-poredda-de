import { cn } from '@/lib/utils';
import { TypographyProps } from './typo-props';

export function TypographyInlineCode({ children, className }: TypographyProps) {
  return (
    <code
      className={cn(
        className,
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
      )}>
      {children}
    </code>
  );
}
