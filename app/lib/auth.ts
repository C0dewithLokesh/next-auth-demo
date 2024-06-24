import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Email", type: "text", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials: any) {
        console.log("c", !credentials);
        return {
          id: "user1",
          name: "Lokesh",
          email: "lokesh@gmail.com",
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || ""
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // jwt: ({ token, user }) => {
    //   token.userId = token.sub;
    //   return token;
    // },
    session: ({ session, token, user }: any) => {
      if (session && session.user) {
        // session.user.id = token.userId;
        session.user.id = token.sub;
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin"
  }
};
