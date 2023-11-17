import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "../../../utils/connectDB";
import User from './../../../models/User';
import {verifyPassword} from '../../../utils/auth'

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
        const {email , password} = credentials;

        try {
          await connectDB();
        } catch (error) {
          throw new Error("Error in connecting DB");
        }
        if(!email || !password){
          throw new Error("Invalid Data")
        }
        const user=await User.findOne({email : email});
        if(!user){
          throw new Error("User dosen't exist");
        }
        const isValid= await verifyPassword(password , user.password);
        if(!isValid){
          throw new Error("User name or password incorrect")
        }
        return {email}
      },
    }),
  ],
//   pages :{
//     signIn : "/signin"
//   }
};

export default NextAuth(athOptions);
