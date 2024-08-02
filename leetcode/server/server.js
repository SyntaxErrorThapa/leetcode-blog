import express from "express";
import questionRouter from "./routes/Question.js";
import googleAuthRouter from "./routes/GoogleAuth.js";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import session from "express-session";
import "dotenv/config";
import User from "./database/users.js";
import cors from "cors";

const app = express();
const port = 5000;

// Config for cors
app.use(
  cors({
    origin: "http://localhost:3000", // Allow only this origin to access the resources
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Allow cookies to be sent and received
  })
);

const users = new User();

// Middle ware for parsing the request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware for sessions
app.use(
  session({
    secret: process.env.SECRETSESSION,
    resave: false,
    saveUninitialized: true,
  })
);

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Configure the Google strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.AUTHCLIENTID,
      clientSecret: process.env.AUTHCLIENTSECRET,
      callbackURL: "http://localhost:5000/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      
      // Simulate finding or creating a user in your database
      let user = await users.findUser(profile.id);
      console.log(user)
      // let user = users.find(u => u.googleId === profile.id);
      if (user.length === 0) {
        uesr = await users.addUser(
          profile.displayName,
          profile.emails[0].value,
          profile.name.givenName,
          profile.name.familyName,
          profile.photos[0].value,
          profile.id
        );
      }
      return done(null, user);
    }
  )
);

// Serialize and deserialize user instances to and from the session
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

// Routes
app.use("/", questionRouter);
app.use("/", googleAuthRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
