import { cn } from '@/lib/utils';
import { TypographyProps } from './typo-props';

export function TypographyLead({ children, className }: TypographyProps) {
  return (
    <p className={cn(className, 'text-xl text-muted-foreground')}>{children}</p>
  );
}
