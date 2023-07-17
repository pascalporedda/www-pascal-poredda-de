import { PropsWithChildren } from "react";

export function TypographyMuted({ children}: PropsWithChildren) {
  return (
    <p className="text-sm text-muted-foreground">{children}</p>
  )
}
