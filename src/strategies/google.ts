import { application } from "express";
import passport from "passport";
import {
  Profile,
  VerifyCallback,
  Strategy as GoogleStrategy,
} from "passport-google-oauth20";

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
        console.debug(profile._json.email);
        done(
          null, 
          //profile,
        );
    }
  )
);
