import { Router } from "express";
import Question from "../database/sqlquestions.js";

const question = new Question();

const router = Router();

const sortedQuestionsBasedOnUserInput = async (questions, category_num) => {
  var sorted_category = {
    easy: [],
    medium: [],
    hard: [],
  };

  Object.keys(questions).forEach((level) => {
    sorted_category[level] = questions[level].filter((question) => {
      return question.category.includes(category_num);
    });
  });

  return sorted_category;
};

router.post("/question", async (req, res) => {
  try {
    if (req.body.logStatus) {
      const all_questions = await question.getAllQuestion(req.user.id);
      const sorted_questions = await sortedQuestionsBasedOnUserInput(
        all_questions,
        req.body.sort_Question
      );

      req.body.sort_Question === 17
        ? res.json({ questions: all_questions })
        : res.json({ questions: sorted_questions });
    } else {
      const all_questions = await question.getAllQuestion(1);
      const sorted_questions = await sortedQuestionsBasedOnUserInput(
        all_questions,
        req.body.sort_Question
      );
      req.body.sort_Question === 17
        ? res.json({ questions: all_questions })
        : res.json({ questions: sorted_questions });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `Error at route /question ${error}` });
  }
});

router.post("/question/submit", async (req, res) => {
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
