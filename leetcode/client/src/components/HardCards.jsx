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
            description={value.subdescription}
            onClick={() =>
              props.openModal(
                value.explanation,
                value.coding,
                false,
                value.subdescription,
                value.description,
                value.questionNo,
                value.code_link,
                value.picture,
                value.category
              )
            }
            color="bg-custom-red"
          />
        ))}
      </div>
    </>
  );
}

export default HardCards;
