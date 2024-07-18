import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const category = [
  { value: 0, label: "Dynamic" },
  { value: 1, label: "Tree" },
];

const level = [
  { value: 0, label: "Easy" },
  { value: 1, label: "Medium" },
  { value: 2, label: "Hard" },
];

function ModalAddQuestion() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1 },
        "& .MuiInputBase-root": {
          color: "white",
          backgroundColor: "#2E2E2E", // Dark gray background color
        },
        "& .MuiInputLabel-root": {
          color: "white",
          fontWeight: "bold", // Make the label text bold
          fontSize: "1.1rem", // Increase the font size
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#4E4E4E", // Slightly lighter gray for the border
          },
          "&:hover fieldset": {
            borderColor: "#4E4E4E", // Slightly lighter gray for the border on hover
          },
          "&.Mui-focused fieldset": {
            borderColor: "#4E4E4E", // Slightly lighter gray for the border when focused
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
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ width: "30%" }}
          />
          <TextField
            id="outlined-basic"
            label="Sub-Heading"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </div>

        {/* Row 2 */}
        <div className="flex flex-row space-x-4">
          <TextField
            id="category"
            select
            label="Category"
            sx={{ width: "100%" }}
          >
            {category.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField id="level" select label="Level" sx={{ width: "100%" }}>
            {level.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>

        {/* Row 3 */}
        <div className="flex flex-row space-x-4">
          <TextField
            id="questionDescription"
            label="Question Description"
            multiline
            rows={4}
            sx={{ width: "100%" }}
          />
        </div>

        {/* Row 4 */}
        <div className="flex flex-row space-x-4">
          <TextField
            id="explanation"
            label="Explanation"
            multiline
            rows={10}
            sx={{ width: "100%" }}
          />
        </div>

        {/* Row 5 */}
        <div className="flex flex-row space-x-4">
          <TextField
            id="picture"
            label="Picture if you have"
            multiline
            rows={1}
            sx={{ width: "100%" }}
          />
        </div>

        {/* Row 6 */}
        <div className="flex flex-row space-x-4">
          <TextField
            id="code"
            label="Code"
            multiline
            rows={10}
            sx={{ width: "100%" }}
          />
        </div>
        {/* Row 7 */}
        <Button variant="contained">Submit</Button>
      </div>
    </Box>
  );
}

export default ModalAddQuestion;
