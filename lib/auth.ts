import type { AuthOptions } from "next-auth";

import { FirestoreAdapter } from "@auth/firebase-adapter";

export const nextAuthOptions: AuthOptions = {
  adapter: FirestoreAdapter({ namingStrategy: "snake_case" }),
  providers: [],
};
