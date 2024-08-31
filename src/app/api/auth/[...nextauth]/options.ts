import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 1 * 60 * 60, // 1 hour
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null
        // logic to salt and hash password
        // const pwHash = saltAndHashPassword(credentials.password)
        // // logic to verify if the user exists
        // user = await getUserFromDb(credentials.email, pwHash)
        // if (!user) {
        //   // No user found, so this is their first attempt to login
        //   // meaning this is also the place you could do registration
        //   throw new Error("User not found.")
        // }
        // return user object with their profile data
        return user
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.accessToken = token.accessToken;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login',  // Custom login page
  },
};
