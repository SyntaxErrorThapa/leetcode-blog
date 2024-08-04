import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
  OutlinedInput,
  Button,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

axios.defaults.withCredentials = true;

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

const validationSchema = Yup.object({
  number: Yup.number().required("Number is required"),
  subheading: Yup.string().required("Subheading is required"),
  category: Yup.array().min(1, "At least one category is required"),
  level: Yup.string().required("Level is required"),
  question_description: Yup.string().required("Description is required"),
  explanation: Yup.string().required("Explanation is required"),
  code: Yup.string().required("Code is required"),
  code_link: Yup.string().url("Invalid URL format").required("Link is required"),
});

function QuestionForm({ onClose, fetchQuestions, isLogged, questionId = null }) {
  const [initialValues, setInitialValues] = useState({
    number: "",
    subheading: "",
    category: [],
    level: "",
    question_description: "",
    explanation: "",
    pdf: null,
    code: "",
    code_link: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      if (questionId) {
        try {
          const response = await axios.get(
            `http://localhost:5000/question/${questionId}`
          );
          const data = response.data;
          setInitialValues({
            number: data.number,
            subheading: data.subheading,
            category: data.category,
            level: data.level,
            question_description: data.question_description,
            explanation: data.explanation,
            pdf: data.pdf,
            code: data.code,
            code_link: data.code_link,
          });
        } catch (error) {
          console.error("Error fetching data", error);
        }
      }
    }
    fetchData();
  }, [questionId]);

  async function submitFormData(values, { setSubmitting }) {
    setLoading(true);
    const formData = new FormData();
    formData.append("number", values.number);
    formData.append("subheading", values.subheading);
    formData.append("category", JSON.stringify(values.category)); // Convert array to JSON string
    formData.append("level", values.level);
    formData.append("question_description", values.question_description);
    formData.append("explanation", values.explanation);
    if (values.pdf) {
      formData.append("pdf", values.pdf); // Append the PDF file
    }
    formData.append("code", values.code);
    formData.append("code_link", values.code_link);

    try {
      if (questionId) {
        await axios.put(
          `http://localhost:5000/question/update/${questionId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } else {
        await axios.post(
          "http://localhost:5000/question/submit",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }

      // Fetch again from the database
      await fetchQuestions();
      onClose();
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={validationSchema}
      onSubmit={submitFormData}
    >
      {({ setFieldValue, isSubmitting }) => (
        <Form>
          <Box
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
                <Field
                  as={TextField}
                  id="outlined-number"
                  label="Number"
                  type="number"
                  name="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{ width: "30%" }}
                />
                <Field
                  as={TextField}
                  id="outlined-basic"
                  label="Sub-Heading"
                  variant="outlined"
                  name="subheading"
                  sx={{ width: "100%" }}
                />
              </div>

              {/* Row 2 */}
              <div className="flex flex-row space-x-4">
                <FormControl sx={{ m: 1, width: "100%" }}>
                  <InputLabel id="category-label">Category</InputLabel>
                  <Field
                    as={Select}
                    labelId="category-label"
                    id="category"
                    multiple
                    name="category"
                    input={<OutlinedInput label="Category" />}
                    renderValue={(selected) =>
                      selected.map((val) => categories.find((cat) => cat.value === val)?.label).join(", ")
                    }
                  >
                    {categories.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Field>
                </FormControl>

                <Field
                  as={TextField}
                  id="level"
                  select
                  label="Level"
                  name="level"
                  sx={{ width: "100%" }}
                >
                  {levels.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Field>
              </div>

              {/* Row 3 */}
              <div className="flex flex-row space-x-4">
                <Field
                  as={TextField}
                  id="questionDescription"
                  label="Question Description"
                  multiline
                  name="question_description"
                  rows={4}
                  sx={{ width: "100%" }}
                />
              </div>

              {/* Row 4 */}
              <div className="flex flex-row space-x-4">
                <Field
                  as={TextField}
                  id="explanation"
                  label="Explanation"
                  name="explanation"
                  multiline
                  rows={10}
                  sx={{ width: "100%" }}
                />
              </div>

              {/* Row 5 */}
              <div className="flex flex-row space-x-4">
                <input
                  type="file"
                  onChange={(event) => setFieldValue("pdf", event.target.files[0])}
                  id="pdf"
                  name="pdf"
                  accept="application/pdf"
                  style={{ display: "none" }}
                />
                <Button
                  variant="contained"
                  onClick={() => document.getElementById("pdf").click()}
                >
                  Upload PDF
                </Button>
                <Field name="pdf">
                  {({ field }) => <span>{field.value ? field.value.name : initialValues.pdf ? initialValues.pdf.name : ""}</span>}
                </Field>
              </div>

              {/* Row 6 */}
              <div className="flex flex-row space-x-4">
                <Field
                  as={TextField}
                  id="code"
                  label="Code"
                  name="code"
                  multiline
                  rows={10}
                  sx={{ width: "100%" }}
                />
              </div>

              {/* Row 7 */}
              <div className="flex flex-row space-x-4">
                <Field
                  as={TextField}
                  id="code_link"
                  label="Leetcode Link"
                  name="code_link"
                  multiline
                  sx={{ width: "100%" }}
                />
              </div>

              {/* Row 8 */}
              <Button
                variant="contained"
                type="submit"
                disabled={loading || isSubmitting} // Disable button when loading
              >
                {loading || isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </Box>
        </Form>
      )}
    </Formik>
  );
}

export default QuestionForm;
