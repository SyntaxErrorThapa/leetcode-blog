import React, { useEffect, useState } from "react";
import EasyCard from "./EasyCards";
import MediumCard from "./MediumCards";
import HardCards from "./HardCards";
import Modal from "./Modal";

function Introduction() {
  const [problems, setProblems] = useState({ easy: [], medium: [], hard: [] });
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({
    questionNo: "",
    description: "",
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

  const openModal = (content) => {
    setModalContent(content);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalContent({ questionNo: "", description: "" });
  };

  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="container mx-auto flex flex-row justify-center space-x-8">
        <div className="text-center h-screen overflow-y-auto no-scrollbar">
          <div className="font-bold text-3xl mt-6 mb-4 ">Easy: {problems.easy.length}</div>
          <EasyCard easyQuestions={problems.easy} openModal={openModal} />
        </div>
        <div className="text-center h-screen overflow-y-auto no-scrollbar">
          <div className="font-bold text-3xl mt-6 mb-4">Medium: {problems.medium.length}</div>
          <MediumCard mediumQuestions={problems.medium} openModal={openModal} />
        </div>
        <div className="text-center h-screen overflow-y-auto no-scrollbar">
          <div className="font-bold text-3xl mt-6 mb-4">Hard: {problems.medium.length}</div>
          <HardCards hardQuestions={problems.hard} openModal={openModal} />
        </div>
      </div>

      {modalVisible && <Modal content={modalContent} closeModal={closeModal} />}
    </div>
  );
}

export default Introduction;
