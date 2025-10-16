import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { db } from "./db.js";
import { admin as adminAc, openAPI } from "better-auth/plugins";

export const auth = betterAuth({
  database: mongodbAdapter(db),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },
  plugins: [openAPI(), adminAc()],
});
