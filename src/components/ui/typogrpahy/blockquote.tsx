import { PropsWithChildren } from "react";

export function TypographyBlockquote({ children }: PropsWithChildren) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  );
}
