import React, { useEffect, useState } from "react";
import EasyCard from "./EasyCards";
import MediumCard from "./MediumCards";
import HardCards from "./HardCards";
import Modal from "./Modal";

function Introduction() {
  const [problems, setProblems] = useState({ easy: [], medium: [], hard: [] });
  const [modalVisible, setModalVisible] = useState(false);
  const [modalcontent, setModalContent] = useState(null);
  console.log(`Modal Content ${modalcontent}`)
  // Trigger modal show
  const openModal = (content) => {
    setModalContent(content);
    setModalVisible(true);
  };

  // Trigger modal close
  const closeModal = () => {
    setModalVisible(false);
    setModalContent(null);
  };

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

      .catch((error) => console.error("Error at route get-question", error));
  }, []);

  console.log(problems);
  return (
    <div className="container mx-auto flex flex-row justify-center space-x-4">
      {/* For Easy Problem */}
      <EasyCard easyQuestions={problems.easy} openModal={openModal}/>

      {/* For Medium Problem */}
      <MediumCard mediumQuestions={problems.medium} openModal={openModal}/>

      {/* For Hard Problem */}
      <HardCards openModal={openModal} hardQuestions={problems.hard} />

      {/* If modalVisible is true then only execute the Modal div */}
      { modalVisible && <Modal content={modalcontent} closeModal={closeModal}/>} 
    </div>
  );
}

export default Introduction;
