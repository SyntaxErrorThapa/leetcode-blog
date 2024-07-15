import React from "react";
import Card from "./Card";

function HardCards(props) {
  return (
    <>
      <div className="flex flex-col">
      {props.hardQuestions.map((value) => (
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

export default HardCards;
