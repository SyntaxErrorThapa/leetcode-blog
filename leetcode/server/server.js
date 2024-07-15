import express from "express";

const app = express();
const port = 5000;

const questions = {
  easy: [
    { questionNo: 1, description: "What is 2+2?", answer: "4" },
    {
      questionNo: 2,
      description: "What is the capital of France?asdfasdfadsf",
      answer: "Paris",
    },
    // Add more easy questions here
  ],
  medium: [
    {
      questionNo: 1,
      description: "What is the square root of 16?",
      answer: "4",
    },
    {
      questionNo: 2,
      description: "Name the process plants use to make food.",
      answer: "Photosynthesis",
    },
    // Add more medium questions here
  ],
  hard: [
    {
      questionNo: 1,
      description: "What is the derivative of x^2?",
      answer: "2x",
    },
    {
      questionNo: 2,
      description: "What is the capital of Mongolia?",
      answer: "Ulaanbaatar",
    },
    // Add more hard questions here
    { questionNo: 33, description: "delta", answer: "despacito" },
  ],
};

app.get("/get-question", (req, res) => {
  res.json({ questions: questions });
});

app.listen(port, () => {
  console.log("Server running on localhost");
});
