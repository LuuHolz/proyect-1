import React, { useState } from 'react';
import ModalAdd from '../Components/Modal';
import NavbarHome from '../Components/Navbar';
import Card from '../Components/Card';

function Home({ cuadros }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedCuadros, setSelectedCuadros] = useState([]);
  
  const handleShowModal = (cuadros) => {
    setSelectedCuadros([...selectedCuadros, cuadros]);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container-elements-home">
      <NavbarHome />
      <div className="box-card">
        {cuadros.length > 0 &&
          cuadros.map((item) => {
            return (
              <div key={item.id}>
                <Card cuadros={item} handleShowModal={() => handleShowModal(item)} />
              </div>
            );
          })}
      </div>
      <ModalAdd show={showModal} handleClose={handleCloseModal} cuadros={selectedCuadros} />
    </div>
  );
}

export default Home;

