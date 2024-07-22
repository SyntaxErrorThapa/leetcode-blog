import { useCallback, useEffect, useState } from "react";

export const useQuestions = () => {
  const [problems, setProblems] = useState({ easy: [], medium: [], hard: [] });

  const fetchQuestions = useCallback(() => {
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

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  return {problems, fetchQuestions};
};
