import { Router } from "express";
import Question from "../database/sqlquestions.js";

const question = new Question();

const router = Router();

router.post("/question", async (req, res) => {
  try {
    if (req.logStatus) {
      const all_questions = await question.getAllQuestion(req.user.id);
      res.json({ questions: all_questions });
    } else {
      const all_questions = await question.getAllQuestion(1);
      res.json({ questions: all_questions });
    }
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
      code_link,
      req.user.id
    );
    res.status(201).json({ message: "Question added successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

export default router;
