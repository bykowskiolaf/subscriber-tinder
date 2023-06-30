import { Router } from "express";
import passport from "passport";

const router = Router();

router.get("/google", passport.authenticate("google", { scope : ['profile', 'email']} ));

router.get('/google/redirect',
  passport.authenticate('google', { successRedirect: '/dashboard', failureRedirect: '/api/auth/google' }),
);
export default router;
