import { cn } from "@/lib/utils";
import { TypographyProps } from "./typo-props";

export function TypographyList({ children, className }: TypographyProps) {
  return <ul className={cn(className, "my-6 ml-6 list-disc [&>li]:mt-2")}>{children}</ul>;
}
