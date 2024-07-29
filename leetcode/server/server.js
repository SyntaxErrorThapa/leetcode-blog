// server.js or index.js
import express from "express";
import questionRouter from "./routes/Question.js";
import googleAuthRouter from "./routes/GoogleAuth.js";  

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the question router
app.use('/', questionRouter);
app.use('/', googleAuthRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
