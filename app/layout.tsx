import "./globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import Script from "next/script";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-EVF4JW4KED" />
      <Script id="gtag">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-EVF4JW4KED');
      `}</Script>
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
