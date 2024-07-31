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
            color="bg-custom-orange"
          />
        ))}
      </div>
    </>
  );
}
export default MediumCard;
