import React, { useState, useContext } from 'react';
import ModalAdd from '../Components/Modal';
import NavbarHome from '../Components/Navbar';
import Card from '../Components/Card';

function Home({ cuadros }) {
  const [state, dispatch] = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);

  
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
        {state.productos.length > 0 &&
          state.productos.map((item) => {
            return (
              <div key={item.id}>
                <Card productos={item} handleShowModal={() => handleShowModal(item)} />
              </div>
            );
          })}
      </div>
      <ModalAdd show={showModal} handleClose={handleCloseModal} cuadros={selectedCuadros} />
    </div>
  );
}

export default Home;

