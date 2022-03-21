import { Button, Modal, Form } from "react-bootstrap";

function UpdateModal({ show, handleClose, data, handleSubmit, handleDataChange}) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update Member</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name="firstName" value={data.firstName}  onChange={handleDataChange} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name="lastName" value={data.lastName}  onChange={handleDataChange} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" value={data.email}  onChange={handleDataChange} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="dateOfBirth">
                        <Form.Label>Date of birth</Form.Label>
                        <Form.Control type="date" name="dateOfBirth" value={data.dateOfBirth}  onChange={handleDataChange} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="designation">
                        <Form.Label>Designation</Form.Label>
                        <Form.Control type="text" name="designation" value={data.designation}   onChange={handleDataChange} required/>
                    </Form.Group>
                    <div className="modal-footer-extended">
                        <Button size="sm" style={{ margin: "10px" }} variant="primary" type="submit" onClick={handleSubmit}>
                            Save Changes
                        </Button>
                        <Button size="sm"  variant="secondary" onClick={handleClose}>
                            cancel
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default UpdateModal;