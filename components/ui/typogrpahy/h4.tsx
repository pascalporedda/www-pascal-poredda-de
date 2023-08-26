import { cn } from "@/lib/utils";
import { TypographyProps } from "./typo-props";

export function TypographyH4({ children, className }: TypographyProps) {
  return (
    <h4 className={cn(className, "scroll-m-20 text-xl font-semibold tracking-tight")}>
      {children}
    </h4>
  );
}
