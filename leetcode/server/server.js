// server.js or index.js
import express from "express";
import questionRouter from "./routes/Question.js";
import googleAuthRouter from "./routes/GoogleAuth.js";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure the Google strategy
passport.use(new GoogleStrategy({
  clientID: process.env.AUTHCLIENTID, 
  clientSecret: process.env.AUTHCLIENTSECRET,
  callbackURL: process.env.AUTHCALLBACKURL, 
}, (accessToken, refreshToken, profile, done) => {
  console.log(profile);
  return done(null, profile);
}))

// Serialize and deserialize user instances to and from the session
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

// Use the question router
app.use("/", questionRouter);
app.use("/", googleAuthRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
