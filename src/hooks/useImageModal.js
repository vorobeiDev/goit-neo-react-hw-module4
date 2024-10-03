import { useState } from 'react';

const useImageModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return {
    isModalOpen,
    selectedImage,
    openModal,
    closeModal,
  };
};

export default useImageModal;
