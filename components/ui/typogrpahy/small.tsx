import { cn } from '@/lib/utils';
import { TypographyProps } from './typo-props';

export function TypographySmall({ children, className }: TypographyProps) {
  return (
    <small className={cn(className, 'text-sm font-medium leading-none')}>
      {children}
    </small>
  );
}
