import "./globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import Script from "next/script";

import { AppCheck } from "./app-check";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=G-ZHKH2DEHPJ`} />
      <Script id="gtag">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-ZHKH2DEHPJ');
      `}</Script>
      <body>{children}</body>
      <AppCheck />
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
