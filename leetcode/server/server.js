// server.js or index.js
import express from "express";
import questionRouter from "./routes/Question.js";  // Ensure this path is correct

const app = express();
const port = 5000;

// Use the question router
app.use('/', questionRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
