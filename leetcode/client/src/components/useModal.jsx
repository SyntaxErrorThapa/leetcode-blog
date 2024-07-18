import { useState } from "react";

export const useModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({
    explanation: "",
    coding: "",
    isAdd: false,
  });
  
  const openModal = (explanation, coding, isAdd) => {
    setModalContent({ explanation, coding, isAdd });
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalContent({ explanation: "", coding: "", isAdd: false });
  };

  return {
    modalVisible,
    modalContent,
    openModal,
    closeModal,
  };
};
