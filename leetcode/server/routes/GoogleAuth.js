import { Router } from "express";
import passport from "passport";

const router = Router();

// Middle ware to check if the user is authenticated
const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
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
    successRedirect: "https://www.leetcodejournal.com/",
    failureRedirect: "https://www.leetcodejournal.com/",
  })
);

// Route to check if the user is authenticated
router.get("/auth/status", isLoggedIn, (req, res) => {
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
      res.redirect("/");
    });
  });
});

export default router;
