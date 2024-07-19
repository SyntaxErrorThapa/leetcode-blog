import { useEffect, useState } from "react";

export const useQuestions = () => {
  const [problems, setProblems] = useState({ easy: [], medium: [], hard: [] });

  useEffect(() => {
    fetch("/question")
      .then((response) => response.json())
      .then((data) => {
        setProblems({
          easy: data.questions.easy,
          medium: data.questions.medium,
          hard: data.questions.hard,
        });
      })
      .catch((error) => console.error("Error fetching questions:", error));
  }, []); // Empty dependency array means this runs once after the initial render

  return problems;
};
