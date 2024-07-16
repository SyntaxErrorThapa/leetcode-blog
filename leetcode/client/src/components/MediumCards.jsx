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
            onClick={() => props.openModal(value.answer)}
          />
        ))}
      </div>
    </>
  );
}
export default MediumCard;
