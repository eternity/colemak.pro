import { sendEmail } from "@/lib/email";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: FirestoreAdapter({ namingStrategy: "snake_case" }),
  providers: [
    GoogleProvider,
    EmailProvider({
      sendVerificationRequest: ({ identifier, url }) =>
        sendEmail(
          identifier,
          "Sign in to your account",
          `Here is the link to sign in to your account: ${url}`
        ),
    }),
  ],
});
