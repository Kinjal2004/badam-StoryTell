import { NextAuthOptions } from "next-auth";
//import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      id: "google",
      name: "Google",
      type: "oauth",
      version: "2.0",
      scope: "email profile",
      params: { prompt: "select_account" },
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // ...add more providers here
  ],
  // Add other NextAuth options if needed
};

export default authOptions;
