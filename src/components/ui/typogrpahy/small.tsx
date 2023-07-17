import { PropsWithChildren } from "react";

export function TypographySmall({ children }: PropsWithChildren) {
  return <small className="text-sm font-medium leading-none">{children}</small>;
}
