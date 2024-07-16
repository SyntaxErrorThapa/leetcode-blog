import { Router } from "express";

const questions = {
  easy: [
    { questionNo: 1, description: "What is 2+2?", answer: "4" },
    {
      questionNo: 2,
      description: "What is the capital of France?asdfasdfadsf",
      answer: "Paris",
    },
    { questionNo: 3, description: "What color is the sky?", answer: "Blue" },
    { questionNo: 4, description: "How many days are in a week?", answer: "7" },
    {
      questionNo: 5,
      description: "What is the capital of Italy?",
      answer: "Rome",
    },
    {
      questionNo: 6,
      description: "How many legs does a spider have?",
      answer: "8",
    },
    {
      questionNo: 7,
      description: "What is the largest planet in our solar system?",
      answer: "Jupiter",
    },
    { questionNo: 8, description: "What is the sum of 5 and 3?", answer: "8" },
    {
      questionNo: 9,
      description: "What is the color of grass?",
      answer: "Green",
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
    {
      questionNo: 3,
      description: "What is the chemical formula for water?",
      answer: "H2O",
    },
    {
      questionNo: 4,
      description: "What is the capital of Canada?",
      answer: "Ottawa",
    },
    {
      questionNo: 5,
      description: "Who wrote 'Romeo and Juliet'?",
      answer: "William Shakespeare",
    },
    {
      questionNo: 6,
      description: "What is the smallest prime number?",
      answer: "2",
    },
    {
      questionNo: 7,
      description: "What is the hardest natural substance on Earth?",
      answer: "Diamond",
    },
    {
      questionNo: 8,
      description: "What is the speed of light in vacuum?",
      answer: "299,792,458 meters per second",
    },
    {
      questionNo: 9,
      description: "What element does 'O' represent on the periodic table?",
      answer: "Oxygen",
    },
    {
      questionNo: 10,
      description: "What is the currency of Japan?",
      answer: "Yen",
    },
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
    {
      questionNo: 3,
      description: "What is the Heisenberg Uncertainty Principle?",
      answer:
        "It's impossible to simultaneously measure the exact position and momentum of a particle.",
    },
    {
      questionNo: 4,
      description: "What is the integral of 1/x dx?",
      answer: "ln|x| + C",
    },
    {
      questionNo: 5,
      description: "Name the longest river in the world.",
      answer: "Nile River",
    },
    {
      questionNo: 6,
      description: "Who is the author of 'The Divine Comedy'?",
      answer: "Dante Alighieri",
    },
    {
      questionNo: 7,
      description: "What is Schrödinger's cat thought experiment?",
      answer:
        "A quantum mechanics paradox where a cat can be both alive and dead.",
    },
    {
      questionNo: 8,
      description: "What is the speed of sound in air?",
      answer: "Approximately 343 meters per second",
    },
    {
      questionNo: 9,
      description: "What is the formula for the area of a circle?",
      answer: "πr^2",
    },
    {
      questionNo: 10,
      description: "What is the highest mountain in the world?",
      answer: "Mount Everest",
    },
    { questionNo: 33, description: "delta", answer: "despacito" },
  ],
};

const router = Router();

router.get("/get-question", (req, res) => {
  res.json({ questions: questions });
});

export default router;
