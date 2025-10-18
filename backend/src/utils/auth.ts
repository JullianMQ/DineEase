import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { db } from "./db.js";
import { admin as adminAc, openAPI } from "better-auth/plugins";

export const auth = betterAuth({
  database: mongodbAdapter(db),
  trustedOrigins: ["http://localhost:5173"],
  advanced: {
    defaultCookieAttributes: {
      sameSite: "lax",
      secure: false, // TODO: TURN TRUE IF DEPLOYED
      // partitioned: true, // CREATES PROBLEMS IN LOCALHOST CHANGE IN PROD
      httpOnly: true,
      path: '/'
    },
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },
  session: {
    expiresIn: 3600,
    cookieCache: {
      enabled: true,
    }
  },
  plugins: [openAPI(), adminAc()],
});

export type AuthType = {
  user: typeof auth.$Infer.Session.user | null;
  session: typeof auth.$Infer.Session.session | null;
};
