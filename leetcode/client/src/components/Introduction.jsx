import React, { useEffect, useState } from "react";
import EasyCard from "./EasyCards";
import MediumCard from "./MediumCards";
import HardCards from "./HardCards";
import Modal from "./Modal";

function Introduction() {
  const [problems, setProblems] = useState({ easy: [], medium: [], hard: [] });
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({
    explanation: "",
    coding: "",
  });

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
      .catch((error) => console.error("Error fetching questions:", error));
  }, []); // Empty dependency array means this runs once after the initial render

  const openModal = (explanation, coding) => {
    setModalContent({explanation : explanation, coding : coding});
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalContent({ explanation: "", coding: "" });
  };

  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="container mx-auto flex flex-row justify-center space-x-8">
        {/* Easy Card Div start */}
        <div className="text-center h-screen overflow-y-auto no-scrollbar">
          <div className="font-bold text-3xl mt-6 mb-4">
            Easy: {problems.easy.length}
          </div>
          <EasyCard easyQuestions={problems.easy} openModal={openModal} />
        </div>
        {/* Medium Card Div Start */}
        <div className="text-center h-screen overflow-y-auto no-scrollbar">
          <div className="font-bold text-3xl mt-6 mb-4">
            Medium: {problems.medium.length}
          </div>
          <MediumCard mediumQuestions={problems.medium} openModal={openModal} />
        </div>
        {/* Hard Card Div Start */}
        <div className="text-center h-screen overflow-y-auto no-scrollbar">
          <div className="font-bold text-3xl mt-6 mb-4">
            Hard: {problems.hard.length}
          </div>
          <HardCards hardQuestions={problems.hard} openModal={openModal} />
        </div>
      </div>

      {modalVisible && <Modal explanation={modalContent.explanation} coding={modalContent.coding} handleClose={closeModal} open={openModal}/>}
    </div>
  );
}

export default Introduction;
