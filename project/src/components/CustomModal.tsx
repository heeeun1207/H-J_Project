import React from 'react';
import Modal from 'react-modal';

const CustomModal = ({ isOpen, closeModal, title, content }) => {


// function CustomModal({ isOpen, closeModal, title, content }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel={title}
    >
      <h2>{title}</h2>
      <p>{content}</p>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
}

export default CustomModal;
