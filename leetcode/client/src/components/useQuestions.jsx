import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export const useQuestions = (logStatus, sort_Question) => {
  const [problems, setProblems] = useState({ easy: [], medium: [], hard: [] });
  const apiUrl = "https://server.leetcodejournal.com";

  const fetchQuestions = useCallback(() => {
    axios.post(`${apiUrl}/question`, { logStatus, sort_Question }, { withCredentials: true })
      .then((response) => {
        setProblems({
          easy: response.data.questions.easy,
          medium: response.data.questions.medium,
          hard: response.data.questions.hard,
        });
      })
      .catch((error) => console.error("Error fetching questions:", error));
  }, [logStatus, sort_Question, apiUrl]);

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  return { problems, fetchQuestions };
};
