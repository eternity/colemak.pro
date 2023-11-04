import type { ReactNode } from "react";

import { getServerSession } from "next-auth";

import SessionProvider from "./session-provider";

export default async function RootLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
