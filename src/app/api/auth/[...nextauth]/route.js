import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { conn } from "@/libs/mariadb";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "user07" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log(credentials)


        const user = await conn.query(`SELECT * FROM users where user_name="${credentials.username}"`);
        console.log(user);

        if (!user[0] || user[0] == []) throw new Error("User invalid");

        const matchPassword = await bcrypt.compare(
          credentials.password,
          user[0].user_password
        );
        console.log(matchPassword)

        if(!matchPassword) throw new Error("User invalid");

        return {
          name: user[0].user_name,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
