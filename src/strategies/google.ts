import { application } from "express";
import passport from "passport";
import {
  Profile,
  VerifyCallback,
  Strategy as GoogleStrategy,
} from "passport-google-oauth20";
var session = require('express-session');

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: process.env.GOOGLE_REDIRECT_URL,
      scope: ['email', 'profile', 'https://www.googleapis.com/auth/youtube'],
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: VerifyCallback,
    ) => {
        console.log("accessToken", accessToken);
        done(null, "kahjfgkajgsf");
    }
  )
);
