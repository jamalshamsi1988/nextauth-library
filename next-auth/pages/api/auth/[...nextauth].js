import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const athOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
    //   name: "credentials",
    //   credentials: {
    //     email: { type: "text", label: "Email", placeholder: "email" },
    //     password: {
    //       type: "password",
    //       label: "password",
    //     },
    //   },
      async authorize(credentials, req) {
        return { name: "Jamal" };
      },
    }),
  ],
//   pages :{
//     signIn : "/signin"
//   }
};

export default NextAuth(athOptions);
