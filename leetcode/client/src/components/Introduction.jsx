import React, { useEffect, useState } from "react";
import EasyCard from "./EasyCards";
import MediumCard from "./MediumCards";
import HardCards from "./HardCards";

function Introduction() {
  const [problems, setProblems] = useState({ easy: [], medium: [], hard: [] });

  useEffect(() => {
    fetch("/get-question")
      .then((response) => response.json())
      .then((data) => {
        setProblems({
          easy: data.questions.easy,
          medium: data.questions.medium,
          hard: data.questions.hard,
        });
      })

      .catch((error) => console.error("Error at route get-question", error));
  }, []);
  
  console.log(problems);
  return (
    <div className="container mx-auto flex flex-row justify-center space-x-4">
      {/* For Easy Problem */}
      <EasyCard easyQuestions={problems.easy} />

      {/* For Medium Problem */}
      <MediumCard mediumQuestions={problems.medium} />

      {/* For Hard Problem */}
      <HardCards hardQuestions={problems.hard} />
    </div>
  );
}

export default Introduction;
