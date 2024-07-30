import { Router } from "express";
import passport from "passport";

const router = Router();

// Route for Google authentication and login
router.get("/auth/google", (req, res, next) => {
  console.log("Auth route hit");
  passport.authenticate("google", { scope: ["email", "profile"] })(
    req,
    res,
    next
  );
});

// Route for handling the callback from Google
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "/login",
  })
);

export default router;
