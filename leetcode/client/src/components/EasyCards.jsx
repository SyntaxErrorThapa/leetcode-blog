import React from "react";
import Card from "./Card";

function EasyCard(props) {
  return (
    <>
    {console.log(props)}
      <div className="flex flex-col">
        {props.easyQuestions.map((value) => (
          <Card
            key={value.questionNo}
            number={value.questionNo}
            description={value.subdescription}
            onClick={() => props.openModal(value.explanation, value.coding, false)}
            color="bg-custom-green"
          />
        ))}
      </div>
    </>
  );
}

export default EasyCard;
