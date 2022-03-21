import { Button, Modal, Form } from "react-bootstrap";

function ViewModal({ show, handleClose, data }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Member Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" readOnly defaultValue={data.firstName}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" readOnly defaultValue={data.lastName}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" readOnly defaultValue={data.email}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="dateOfBirth">
                        <Form.Label>Date of birth</Form.Label>
                        <Form.Control type="date" readOnly defaultValue={data.dateOfBirth}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="designation">
                        <Form.Label>Designation</Form.Label>
                        <Form.Control type="text" readOnly defaultValue={data.designation} />
                    </Form.Group>
                    <div className="modal-footer-extended">
                        <Button size="sm" variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default ViewModal;