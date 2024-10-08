import React from "react";
import EasyCard from "./Card/EasyCards";
import MediumCard from "./Card/MediumCards";
import HardCards from "./Card/HardCards";
import Modal from "./ModalComponent/Modal";
import SpeedDialButton from "./Button/SpeedDialButton";
import { useQuestions } from "./useQuestions";
import { useModal } from "./useModal";
import { useAuth } from "./AuthContext";
import SortButton from "./Button/SortButton";

function Introduction() {
  const { isLogged, setIsLogged } = useAuth();
  const [sortQuestion, setSortQuestion] = React.useState(17);
  const { problems, fetchQuestions } = useQuestions(
    isLogged.logStatus,
    sortQuestion
  ); // Initially Default
  const { modalVisible, modalContent, openModal, closeModal } = useModal();

  const triggerSort = (sort_num) => {
    setSortQuestion(sort_num);
  };

  return (
    <div className="flex relative flex-col items-center space-y-8">
      {isLogged.logStatus ? (
        <>
          <div className="relative flex flex-row font-bold justify-center text-center text-4xl pt-5 w-full">
            <div className="absolute top-4 right-12">
              <SortButton triggerSort={triggerSort} />
            </div>
          </div>
        </>
      ) : (
        <div className="relative flex flex-col font-bold justify-center text-center text-4xl pt-5 w-full">
          <div className="flex flex-row">
            <div className="flex-grow">
              <h1>Top 100 Leetcode Questions</h1>
            </div>
            <div className="absolute top-4 right-12">
              <SortButton triggerSort={triggerSort} />
            </div>
          </div>
          <div className="mt-5">
            <h1>"Join Now and Save Your LeetCode Solutions"</h1>
          </div>
        </div>
      )}
      <div className="container mx-auto flex flex-row justify-center space-x-8">
        {/* Easy Card Div start */}
        <div className="text-center h-screen overflow-y-auto no-scrollbar">
          <div className="font-bold text-3xl mt-6 mb-4">
            Easy: {problems.easy.length}
          </div>
          <EasyCard
            easyQuestions={problems.easy}
            openModal={openModal}
            height={100}
            width={250}
          />
        </div>
        {/* Medium Card Div Start */}
        <div className="text-center h-screen overflow-y-auto no-scrollbar">
          <div className="font-bold text-3xl mt-6 mb-4">
            Medium: {problems.medium.length}
          </div>
          <MediumCard
            mediumQuestions={problems.medium}
            openModal={openModal}
            height={100}
            width={250}
          />
        </div>
        {/* Hard Card Div Start */}
        <div className="text-center h-screen overflow-y-auto no-scrollbar relative">
          <div className="font-bold text-3xl mt-6 mb-4">
            Hard: {problems.hard.length}
          </div>
          <HardCards
            hardQuestions={problems.hard}
            openModal={openModal}
            height={100}
            width={250}
          />
        </div>
      </div>

      {modalVisible && (
        <Modal
          modalContent={modalContent}
          handleClose={closeModal}
          open={openModal}
          isAdd={modalContent.isAdd}
          fetchQuestions={fetchQuestions}
          isLogged={isLogged.logStatus}
        />
      )}

      {/* Position for SpeedDialButton */}
      {isLogged.logStatus && <SpeedDialButton openModal={openModal} />}
    </div>
  );
}

export default Introduction;
