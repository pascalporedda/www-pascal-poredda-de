import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { fontSans } from "@/lib/fonts";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Pascal Poredda",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex h-full flex-col bg-background antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative min-h-screen">
            <div className="container">
              <PageHeader />
              <main>{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
