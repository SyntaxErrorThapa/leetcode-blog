import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Chip,
  Box,
  OutlinedInput,
} from "@mui/material";
import Button from "@mui/material/Button";

const categories = [
  { value: 0, label: "Arrays & Hashing" },
  { value: 1, label: "Two Pointers" },
  { value: 2, label: "Stack" },
  { value: 3, label: "Binary Search" },
  { value: 4, label: "Sliding Window" },
  { value: 5, label: "Linked List" },
  { value: 6, label: "Trees" },
  { value: 7, label: "Tries" },
  { value: 8, label: "Backtracking" },
  { value: 9, label: "Heap / Priority Queue" },
  { value: 10, label: "Intervals" },
  { value: 11, label: "Greedy" },
  { value: 12, label: "Advanced Graphs" },
  { value: 13, label: "Graphs" },
  { value: 14, label: "Dynamic Programming" },
  { value: 15, label: "Bit Manipulations" },
  { value: 16, label: "Tree" },
  
];

const levels = [
  { value: 0, label: "Easy" },
  { value: 1, label: "Medium" },
  { value: 2, label: "Hard" },
];

function ModalAddQuestion({ onClose, fetchQuestions, isLogged }) {
  const [formdata, setFormdata] = useState({
    number: "",
    subheading: "",
    category: [],
    level: "",
    question_description: "",
    explanation: "",
    picture: "",
    code: "",
    code_link: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    submitFormData();
    fetchQuestions(isLogged);
  }

  async function submitFormData() {
    setLoading(true);
    try {
      const response = await axios.post("/question/submit", formdata);
      onClose();
      // Set the form to initial state
      setFormdata({
        number: "",
        subheading: "",
        category: [],
        level: "",
        question_description: "",
        explanation: "",
        picture: "",
        code: "",
        code_link: "",
      });
    } catch (error) {
      alert(error);
      // Handle error here, e.g., show a notification or alert to the user
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        "& .MuiTextField-root": { m: 1 },
        "& .MuiInputBase-root": {
          color: "white",
          backgroundColor: "#2E2E2E",
        },
        "& .MuiInputLabel-root": {
          color: "white",
          fontWeight: "bold",
          fontSize: "1.1rem",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#4E4E4E",
          },
          "&:hover fieldset": {
            borderColor: "#4E4E4E",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#4E4E4E",
          },
        },
        backgroundColor: "#1e1e1e",
        borderRadius: "20px",
        p: 3,
      }}
      noValidate
      autoComplete="off"
    >
      <div className="flex flex-col space-y-4">
        {/* Row 1 */}
        <div className="flex flex-row space-x-4">
          <TextField
            onChange={handleChange}
            id="outlined-number"
            label="Number"
            type="number"
            name="number"
            value={formdata.number}
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ width: "30%" }}
          />
          <TextField
            onChange={handleChange}
            id="outlined-basic"
            label="Sub-Heading"
            variant="outlined"
            name="subheading"
            value={formdata.subheading}
            sx={{ width: "100%" }}
          />
        </div>

        {/* Row 2 */}
        <div className="flex flex-row space-x-4">
          {/* <TextField
            id="category"
            onChange={handleChange}
            select
            label="Category"
            name="category"
            value={formdata.category}
            sx={{ width: "100%" }}
          >
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField> */}
          <FormControl sx={{ m: 1, width: "100%" }}>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              id="category"
              multiple
              value={formdata.category}
              onChange={handleChange}
              name="category"
              input={<OutlinedInput label="Category" />}
            >
              {categories.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            onChange={handleChange}
            id="level"
            select
            label="Level"
            name="level"
            value={formdata.level}
            sx={{ width: "100%" }}
          >
            {levels.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>

        {/* Row 3 */}
        <div className="flex flex-row space-x-4">
          <TextField
            onChange={handleChange}
            id="questionDescription"
            label="Question Description"
            multiline
            name="question_description"
            value={formdata.question_description}
            rows={4}
            sx={{ width: "100%" }}
          />
        </div>

        {/* Row 4 */}
        <div className="flex flex-row space-x-4">
          <TextField
            onChange={handleChange}
            id="explanation"
            label="Explanation"
            name="explanation"
            value={formdata.explanation}
            multiline
            rows={10}
            sx={{ width: "100%" }}
          />
        </div>

        {/* Row 5 */}
        <div className="flex flex-row space-x-4">
          <TextField
            onChange={handleChange}
            id="picture"
            label="Picture if you have"
            name="picture"
            value={formdata.picture}
            multiline
            rows={1}
            sx={{ width: "100%" }}
          />
        </div>

        {/* Row 6 */}
        <div className="flex flex-row space-x-4">
          <TextField
            onChange={handleChange}
            id="code"
            label="Code"
            name="code"
            value={formdata.code}
            multiline
            rows={10}
            sx={{ width: "100%" }}
          />
        </div>

        {/* Row 7 */}
        <div className="flex flex-row space-x-4">
          <TextField
            onChange={handleChange}
            id="code_link"
            label="Leetcode Link"
            name="code_link"
            value={formdata.code_link}
            multiline
            sx={{ width: "100%" }}
          />
        </div>

        {/* Row 8 */}
        <Button
          variant="contained"
          type="submit"
          disabled={loading} // Disable button when loading
        >
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </Box>
  );
}

export default ModalAddQuestion;
