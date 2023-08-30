import React, { useState } from 'react';
import Navbar from '../components/Navbar.tsx';
import CustomModal from '../components/CustomModal.tsx';



const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <Navbar />
        <button onClick={openModal}>Open Modal</button>
        <CustomModal
          isOpen={modalIsOpen}
          closeModal={closeModal}
          title="Modal Title"
          content="This is the content of the modal."
      />
    </div>
  )
  };
export default App;