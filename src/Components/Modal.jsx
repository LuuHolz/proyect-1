import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalAdd({ show, handleClose, cuadros }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>¡Producto agregado!</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{cuadros.title}</p>
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


