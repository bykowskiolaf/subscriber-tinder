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
    },
    async (
      accessToken: string,
      refreshToken: string,
      // profile: Profile, This is how it should be lol
      profile: any,
      done: VerifyCallback,
    ) => {
      profile.accessToken = accessToken;
      done(null, profile);
    }
  )
);

passport.serializeUser(function(user : any, done) {
  process.nextTick(function() {
    return done(null, {
      id: user.id,
      name: user.name.givenName,
      surname: user.name.familyName,
      email: user.emails[0].value,
      accessToken: user.accessToken,
    });
  });
});

passport.deserializeUser(function(user : any, done) {
  process.nextTick(function() {
    return done(null, user);
  });
});