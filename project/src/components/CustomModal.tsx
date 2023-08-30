import React from 'react';
import Modal from 'react-modal';
import '../styles/CustomModal.css';

const CustomModal = ({ isOpen, closeModal, title, content, posterUrl }) => {


// function CustomModal({ isOpen, closeModal, title, content }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel={title}
      className="custom-modal" // 스타일 클래스를 적용
      overlayClassName="custom-modal-overlay" // 스타일 클래스를 적용한 오버레이
    >
      <img className='modalImg' src={posterUrl} alt={title} />
      <h2>{title}</h2>
      <p>{content}</p>
      <button onClick={closeModal} className="close-button">Close</button>
    </Modal>
  );
}

export default CustomModal;
