import { FirestoreAdapter } from "@auth/firebase-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: FirestoreAdapter({ namingStrategy: "snake_case" }),
  providers: [GoogleProvider],
});
