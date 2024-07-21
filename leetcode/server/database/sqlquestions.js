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
  ) {
    const query =
      "INSERT INTO leetcode_questions (number, subheading, category, level, description, explanation, picture, code, code_link) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)";
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
        code_link
      ]);
      return add_confirm;
    } catch (error) {
      throw ("Error at addQuestions ", error);
    }
  }

  /**
   * Function that gets all the question from the data base
   */
  async getAllQuestion() {
    const query = "SELECT * FROM leetcode_questions";
    try {
      const returned_questions = await this.db.query(query);
      return returned_questions.rows;
    } catch (error) {
      throw ("Error at getallquestions", error);
    }
  }
}

export default Question;