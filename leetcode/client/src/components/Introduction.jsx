import React from "react";
import EasyCard from "./EasyCards";
import MediumCard from "./MediumCards";
import HardCards from "./HardCards";
import Modal from "./ModalComponent/Modal";
import SpeedDialButton from "./SpeedDialButton";
import { useQuestions } from "./useQuestions";
import { useModal } from "./useModal";
import { useAuth } from "./AuthContext";

function Introduction() {
  const { problems, fetchQuestions } = useQuestions();
  const { modalVisible, modalContent, openModal, closeModal } = useModal();
  const { isLogged } = useAuth();
  console.log(isLogged);
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
        <div className="text-center h-screen overflow-y-auto no-scrollbar relative">
          <div className="font-bold text-3xl mt-6 mb-4">
            Hard: {problems.hard.length}
          </div>
          <HardCards hardQuestions={problems.hard} openModal={openModal} />
        </div>
      </div>

      {modalVisible && (
        <Modal
          modalContent={modalContent}
          handleClose={closeModal}
          open={openModal}
          isAdd={modalContent.isAdd}
          fetchQuestions={fetchQuestions}
        />
      )}

      {/* Position for SpeedDialButton */}
      {isLogged.logStatus && <SpeedDialButton openModal={openModal} />}
    </div>
  );
}

export default Introduction;
