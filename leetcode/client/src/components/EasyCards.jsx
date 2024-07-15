import React from "react";
import Card from "./Card";

function EasyCard(props) {
  return (
    <>
      <div className="flex flex-col">
        {props.easyQuestions.map((value) => (
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

export default EasyCard;
