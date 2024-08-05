import { Router } from "express";
import Question from "../database/sqlquestions.js";
import multer from "multer";

const question = new Question();
const router = Router();

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

// Configuring multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, req.user.email + "-" + req.body.number + ".pdf");
  },
});

const upload = multer({ storage: storage, limits: { fileSize: 1000000 } }); // 1MB limit

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

    res.status(500).json({ error: `Error at route /question ${error}` });
  }
});

router.delete("/question/delete/:questionNo", async (req, res) => {
  const questionNo = req.params.questionNo;
  try {
    const response = await question.deleteQuestionByQuestionNoAndUserID(
      questionNo,
      req.user.id
    );

    res.status(200).json({ message: "Delete Successful!" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting from database" });
  }
});

router.post(
  "/question/submit",
  ensureAuthenticated,
  upload.single("pdf"),
  async (req, res) => {
    try {
      const {
        number,
        subheading,
        level,
        question_description,
        explanation,
        code,
        code_link,
      } = req.body;
      console.log(req.body);
      const category = JSON.parse(req.body.category);

      await question.addQuestion(
        number,
        subheading,
        category,
        level,
        question_description,
        explanation,
        req.file ? req.file.path : "",
        code,
        code_link,
        req.user.id
      );

      res.status(200).json({ message: "Question added successfully!!" });
    } catch (error) {
      res.status(500).json({
        message: `Make sure you all the fields are filled. i.e. 
            Number, Sub-Heading, Category, Level, Question Description, Explanation, Code. 
            Your PDF upload file and leetcode link are optional`,
      });
    }
  }
);

export default router;
