import { Router } from "express";
import Question from "../database/sqlquestions.js";

// Initializing the object Question
const question = new Question();

const questions = {
  easy: [
    {
      questionNo: 1,
      subdescription: "Basic Math",
      description: "Write a function to add two numbers.",
      explanation:
        "The function should take two numbers as input and return their sum.",
      coding: "function add(a, b) {\n    return a + b;\n  }",
      leetcodeProblemLink: "https://leetcode.com/problems/two-sum/",
    },
    {
      questionNo: 2,
      subdescription: "String Manipulation",
      description: "Write a function to reverse a string.",
      explanation:
        "The function should take a string as input and return the reversed string.",
      coding:
        "function reverseString(str) {\n    return str.split('').reverse().join('');\n  }",
      leetcodeProblemLink: "https://leetcode.com/problems/reverse-string/",
    },
  ],
  medium: [
    {
      questionNo: 1,
      subdescription: "Array Operations",
      description: "Write a function to find the maximum element in an array.",
      explanation:
        "The function should take an array as input and return the maximum element in the array.",
      coding: "function findMax(arr) {\n    return Math.max(...arr);\n  }",
    },
  ],
  hard: [
    {
      questionNo: 1,
      subdescription: "Dynamic Programming",
      description: "Write a function to find the nth Fibonacci number.",
      explanation:
        "The function should use dynamic programming to find the nth Fibonacci number.",
      coding:
        "function fibonacci(n) {\n    let fib = [0, 1];\n    for (let i = 2; i <= n; i++) {\n      fib[i] = fib[i - 1] + fib[i - 2];\n    }\n    return fib[n];\n  }",
    },
  ],
};

const router = Router();

router.get("/question", async (req, res) => {
  try {
    const all_questions = await question.getAllQuestion();
    res.json({ questions: all_questions });
  } catch (error) {
    res.status(500).json({ error: `Error at route /question ${error}` });
  }
});

router.post("/question", async (req, res) => {
  try {
    console.log(req.body);
    const {
      number,
      subheading,
      category,
      level,
      question_description,
      explanation,
      picture,
      code,
      code_link,
    } = req.body;
    // console.log(number);
    await question.addQuestion(
      number,
      subheading,
      category,
      level,
      question_description,
      explanation,
      picture,
      code,
      code_link
    );
    res.status(201).json({ message: "Question added successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

export default router;
