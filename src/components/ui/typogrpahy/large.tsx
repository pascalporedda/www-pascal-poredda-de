import { cn } from '@/lib/utils';
import { TypographyProps } from './typo-props';

export function TypographyLarge({ children, className }: TypographyProps) {
  return (
    <div className={cn(className, 'text-lg font-semibold')}>{children}</div>
  );
}
