import "./globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Colemak Pro",
  description: "Colemak keyboard trainer for professionals",
  icons: [
    {
      rel: "icon",
      url: "/favicon.svg",
    },
    {
      rel: "mask-icon",
      url: "/favicon.svg",
      color: "#000000",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
  ],
};
