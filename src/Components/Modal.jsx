import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalAdd({ show, handleClose, cuadros }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>¡Productos seleccionados!</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {cuadros.length > 0 ? (
          <ul>
            {cuadros.map((cuadro, index) => (
              <div key={index}>
                <img src={cuadro.image} alt="Producto" className="product-image" />
                {cuadro.title}
              </div>
            ))}
          </ul>
        ) : (
          <p>No se han seleccionado productos.</p>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">Finish</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalAdd;
