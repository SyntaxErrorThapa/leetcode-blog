import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const categories = [
  { value: 0, label: "Dynamic" },
  { value: 1, label: "Tree" },
];

const levels = [
  { value: 0, label: "Easy" },
  { value: 1, label: "Medium" },
  { value: 2, label: "Hard" },
];

function ModalAddQuestion({ onClose }) {
  const [formdata, setFormdata] = useState({
    number: "",
    subheading: "",
    category: "",
    level: "",
    question_description: "",
    explanation: "",
    picture: "",
    code: "",
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
  }

  async function submitFormData() {
    setLoading(true);
    try {
      const response = await axios.post("/question", formdata);
      onClose();
      // Set the form to initial state
      setFormdata({
        number: "",
        subheading: "",
        category: "",
        level: "",
        question_description: "",
        explanation: "",
        picture: "",
        code: "",
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
          <TextField
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
          </TextField>

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
