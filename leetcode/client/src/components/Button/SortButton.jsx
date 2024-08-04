import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function SortButton({ triggerSort }) {
  const [sort, setSort] = useState("");

  const handleChange = (event) => {
    setSort(event.target.value);
    triggerSort(event.target.value);
  };

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
    { value: 17, label: "Default" },
  ];

  return (
    <Box
      sx={{
        minWidth: 110,
        bgcolor: "#2c2f33",
        borderRadius: 3,
        "& .MuiSelect-root": { color: "#fff" }, // White text for selected item
        "& .MuiInputLabel-root": { color: "#fff", fontWeight: "bold" }, // White and bold label
        "& .MuiSelect-icon": { color: "#fff" }, // White color for dropdown arrow
        "& .MuiMenuItem-root": { color: "#fff" }, // White text for menu items
        "& .MuiSelect-select": {
          color: "#fff",
        }, // White text for selected item
      }}
    >
      <FormControl fullWidth>
        <InputLabel>Sort</InputLabel>
        <Select
          value={sort}
          label="Sort"
          onChange={handleChange}
          MenuProps={{
            PaperProps: {
              sx: {
                bgcolor: "#2c2f33", // Background color for dropdown
                "& .MuiMenuItem-root": {
                  color: "#fff", // White text for menu items
                },
              },
            },
          }}
        >
          {categories.map((category) => (
            <MenuItem
              key={category.value}
              value={category.value}
            >
              {category.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SortButton;
