import pg from "pg";
import "dotenv/config";

class Question {
  constructor() {
    this.db = new pg.Client({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    });
    // Connect the database
    this.db.connect();
  }

  /**
   * Function that add requested question to the data base
   */
  async addQuestion(
    no,
    subheading,
    category,
    level,
    question_description,
    explanation,
    picture,
    code,
    code_link,
    userId
  ) {
    const query =
      "INSERT INTO leetcode_questions (number, subheading, category, level, description, explanation, picture, code, code_link, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";
    try {
      const add_confirm = await this.db.query(query, [
        no,
        subheading,
        category,
        level,
        question_description,
        explanation,
        picture,
        code,
        code_link,
        userId,
      ]);
      return add_confirm;
    } catch (error) {
      throw ("Error at addQuestions ", error);
    }
  }

  formatQuestion(value) {
    return {
      questionNo: value.number,
      subdescription: value.subheading,
      description: value.description,
      explanation: value.explanation,
      coding: value.code,
      code_link: value.code_link,
      picture: value.picture,
      category: value.category,
    };
  }

  /**
   * Function that gets all the question from the data base
   */
  async getAllQuestion(userId) {
    const query = "SELECT * FROM leetcode_questions WHERE user_id = $1";
    try {
      const returned_questions = await this.db.query(query, [userId]);
      var questions = {
        easy: [],
        medium: [],
        hard: [],
      };

      returned_questions.rows.map((value) => {
        if (value.level == 0) {
          // Easy level
          questions["easy"].push(this.formatQuestion(value));
        } else if (value.level == 1) {
          questions["medium"].push(this.formatQuestion(value));
        } else {
          questions["hard"].push(this.formatQuestion(value));
        }
      });
      return questions;
    } catch (error) {
      throw ("Error at getallquestions", error);
    }
  }

  async deleteQuestionByQuestionNoAndUserID(questionNo, userId) {
    try {
      const query =
        "DELETE FROM leetcode_questions WHERE number = $1 AND user_id = $2";
      const response = await this.db.query(query, [questionNo, userId]);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getQuestionByNumber(questionNo, userid) {
    try {
      const query =
        "SELECT * FROM leetcode_questions where number = $1 AND user_id = $2";
      const result = await this.db.query(query, [questionNo, userid]);
      if (result) {
        result.category = JSON.parse(result.category); // Parse the category field
      }
      return result;
    } catch (error) {
      throw error;
    }
  }
}

export default Question;
