import { TypographyProps } from './typo-props';
import { cn } from '@/lib/utils';

export function TypographyMuted({ children, className }: TypographyProps) {
  return (
    <p className={cn(className, 'text-sm text-muted-foreground')}>{children}</p>
  );
}
