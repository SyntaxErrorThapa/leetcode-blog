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
            height={props.height}
            width={props.width}
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
            color="bg-custom-green"
          />
        ))}
      </div>
    </>
  );
}

export default EasyCard;
