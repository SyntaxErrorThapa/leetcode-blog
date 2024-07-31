import { useCallback, useEffect, useState } from "react";

export const useQuestions = (logStatus) => {
  const [problems, setProblems] = useState({ easy: [], medium: [], hard: [] });

  const fetchQuestions = useCallback(() => {
    fetch("/question", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ logStatus }),
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
  }, [logStatus]); 

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  return { problems, fetchQuestions };
};
