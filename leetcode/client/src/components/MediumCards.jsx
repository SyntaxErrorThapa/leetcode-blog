import React from "react";
import Card from "./Card";

function MediumCard(props) {
  return (
    <>
      <div className="flex flex-col ">
        {props.mediumQuestions.map((value) => (
          <Card
            key={value.questionNo}
            number={value.questionNo}
            description={value.description}
          />
        ))}
      </div>
    </>
  );
}
export default MediumCard;
