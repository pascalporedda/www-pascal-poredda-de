import { PropsWithChildren } from "react";

export function TypographyLarge({ children }: PropsWithChildren) {
  return (
    <div className="text-lg font-semibold">{children}</div>
  );
}
