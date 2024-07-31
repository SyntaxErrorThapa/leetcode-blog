import { Router } from "express";
import passport from "passport";

const router = Router();

// Middle ware to check if the user is authenticated
const isLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
};

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
    successRedirect: "http://localhost:3000/auth/status",
    failureRedirect: "http://localhost:3000/",
  })
);

// Route to check if the user is authenticated
router.get("/auth/status", isLoggedIn, (req, res) => {
  console.log(`In aith ${req.user}`);
  res.status(200).json({ isLogged: true, user: req.user });
});

// Route to logout the user
// Route to logout the user
router.post("/auth/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.status(200).json({ isLogged: false, user: null });
    });
  });
});

export default router;
