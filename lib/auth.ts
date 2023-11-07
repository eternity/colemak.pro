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
      sendVerificationRequest: ({ identifier, url, token }) =>
        sendEmail({
          to: identifier,
          subject: "Sign in to your account",
          text: `Sign in to your account: ${url}`,
          html: `<p>Sign in to your account: <a href="${url}">${url}</a></p>`,
        }),
    }),
  ],
});
