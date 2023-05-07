import { Router } from "express";

const router = Router();

// @desc    Login/Landing page
// @route   GET /
router.get("/", (req, res) => {
  res.render('login');
});

// @desc    Dashboard page
// @route   GET /dashboard
router.get("/dashboard", (req, res) => {
    res.render('dashboard');
});

export default router;