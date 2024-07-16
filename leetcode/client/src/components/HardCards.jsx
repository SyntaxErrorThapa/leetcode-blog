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
            onClick={() => props.openModal(value.answer)} // Only activated when clicked thats why use of () =>
            color = "bg-custom-red"
          />
        ))}
      </div>
    </>
  );
}

export default HardCards;
