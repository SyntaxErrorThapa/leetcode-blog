import pg from "pg";
import "dotenv/config";

class User {
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

  // Function that adds user to the database
  async addUser(full_name, email, first_name, last_name, user_image, id) {
    const query =
      "INSERT INTO users (full_name, first_name, last_name, user_image, email, googleid) VALUES ($1, $2, $3, $4, $5, $6)";
    try {
      const values = [full_name, first_name, last_name, user_image, email, id];
      const add_confirm = await this.db.query(query, values);
      console.log(add_confirm);
      return add_confirm;
    } catch (error) {
      throw ("Error at addUser ", error);
    }
  }

  async findUser(id) {
    const query = "SELECT * FROM users WHERE googleID = $1";
    try {
      const value = [id];
      const user = await this.db.query(query, value);
      return user.rows;
    } catch (error) {
      throw ("Error at findUser ", error);
    }
  }
}

export default User;
