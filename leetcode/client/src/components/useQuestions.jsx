import { useCallback, useEffect, useState } from "react";

export const useQuestions = (logStatus, sort_Question) => {
  const [problems, setProblems] = useState({ easy: [], medium: [], hard: [] });
  console.log(logStatus, sort_Question);
  const fetchQuestions = useCallback(() => {
    fetch("/question", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ logStatus, sort_Question }),
    })
      .then((response) => response.json())
      .then((data) => {
        setProblems({
          easy: data.questions.easy,
          medium: data.questions.medium,
          hard: data.questions.hard,
        });
      })
      .catch((error) => console.error("Error fetching questions:", error));
  }, [logStatus, sort_Question]); 

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  return { problems, fetchQuestions };
};
