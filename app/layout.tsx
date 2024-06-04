import type { Metadata } from "next";
import { Orbitron } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const orbitron = Orbitron({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travel Website",
  description: "Best Travelling Guide ever!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.ico" sizes="any" />
      </head>
      <body className={orbitron.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
