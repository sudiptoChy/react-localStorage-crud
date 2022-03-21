import {Button, Modal, Form } from "react-bootstrap";

function CreateModal({ show, handleClose, handleInputChange, handleSubmit }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Member</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name" name="firstName" onChange={handleInputChange} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter last name" name="lastName" onChange={handleInputChange} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleInputChange} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="dateOfBirth">
                        <Form.Label>Date of birth</Form.Label>
                        <Form.Control type="date" placeholder="Enter date of birth" name="dateOfBirth" onChange={handleInputChange} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="designation">
                        <Form.Label>Designation</Form.Label>
                        <Form.Control type="text" placeholder="Enter your designation" name="designation" onChange={handleInputChange} required />
                    </Form.Group>
                    <div className="modal-footer-extended">
                        <Button size="sm" style={{ margin: "10px" }} variant="primary" type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                        <Button size="sm" variant="secondary" onClick={handleClose}>
                            cancel
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default CreateModal;