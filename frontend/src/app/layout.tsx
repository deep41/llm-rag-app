import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

export const metadata: Metadata = {
  title: "Chat App",
  description: "Create a chat app with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>{children}</body>
    </html>
  );
}
