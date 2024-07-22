import { useState } from "react";

export const useModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({
    explanation: "",
    coding: "",
    isAdd: false,
    subdescription: "",
    description: "",
    questionNo: "",
    code_link: "",
    picture: "",
    category: "",
  });

  const openModal = (
    explanation,
    coding,
    isAdd,
    subdescription,
    description,
    questionNo,
    code_link,
    picture,
    category
  ) => {
    setModalContent({
      explanation,
      coding,
      isAdd,
      subdescription,
      description,
      questionNo,
      code_link,
      picture,
      category,
    });
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalContent({
      explanation: "",
      coding: "",
      isAdd: false,
      subdescription: "",
      description: "",
      questionNo: "",
      code_link: "",
      picture: "",
      category: "",
    });
  };

  return {
    modalVisible,
    modalContent,
    openModal,
    closeModal,
  };
};
