import { PropsWithChildren } from "react";

export function Main({ children }: PropsWithChildren) {
  return (
    <main className="font-serif container mx-auto relative">{children}</main>
  );
}
