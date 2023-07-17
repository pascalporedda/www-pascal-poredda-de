import { PropsWithChildren } from "react";

export function TypographyLead({ children }: PropsWithChildren) {
  return <p className="text-xl text-muted-foreground">{children}</p>;
}
