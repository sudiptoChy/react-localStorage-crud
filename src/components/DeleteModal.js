import { Button, Modal } from "react-bootstrap";

function DeleteModal({ show, handleClose, handleSubmit }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Member</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p> Are you sure, you want to delete this item? </p>
            </Modal.Body>
            <Modal.Footer>
                <Button size="sm" variant="danger" onClick={() => handleSubmit()}> Yes </Button>
                <Button size="sm" variant="secondary" onClick={handleClose}> No </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteModal;