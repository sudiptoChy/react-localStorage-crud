import { Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getUserSeed, uuidv4, saveToLocalStorage, calculateAge } from "../utils/utils";
import DeleteModal from "./DeleteModal";
import DataTable from "./DataTable";
import DataTableHeader from "./DataTableHeader";
import CreateModal from "./CreateModal";
import ViewModal from "./ViewModal";
import UpdateModal from "./UpdateModal";

function Home() {
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);

    const handleShow = () => setShowCreateModal(true);
    const handleClose = () => setShowCreateModal(false);

    const handleCloseViewModal = () => setShowViewModal(false);
    const handleShowViewModal = () => setShowViewModal(true);

    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const handleShowDeleteModal = () => setShowDeleteModal(true);

    const handleCloseUpdateModal = () => setShowUpdateModal(false);
    const handleShowUpdateModal = () => setShowUpdateModal(true);

    const [userDetails, setUserDetails] = useState({
        firstName: null,
        lastName: null,
        email: null,
        dateOfBirth: null,
        designation: null,
        createdDate: null
    });
    const [updatedUser, setUpdatedUser] = useState({
        firstName: null,
        lastName: null,
        email: null,
        dateOfBirth: 0,
        designation: null,
    });
    const [userList, setUserList] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});

    function getUserDataFromLocalStorage() {
        const userRecords = window.localStorage.getItem('members');
        const users = [];
        if (!userRecords) {
            return users;
        }
        return JSON.parse(userRecords);
    }

    function handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setUserDetails((previousState) => {
            return {
                ...previousState,
                [name]: value
            }
        });
    }

    function handleUserUpdateChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setUpdatedUser((previousState) => {
            return {
                ...previousState,
                [name]: value
            }
        });
    }

    function handleSearchInputChange(event) {
        const target = event.target;
        const value = target.value.trim().toLowerCase();
        let users = getUserDataFromLocalStorage();
        const filterdUserList = users.filter(data => {
            return data.firstName.toLowerCase().includes(value) || data.lastName.toLowerCase().includes(value)
                || data.email.toLowerCase().includes(value) || data.designation.toLowerCase().includes(value)
        });
        setUserList(filterdUserList);
    }

    function syncUserList(data) {
        data = data.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
        data.map((item) => {
            item.age = calculateAge(item.dateOfBirth)
        });
        saveToLocalStorage(data, 'members');
        setUserList(data);
    }

    function handleSubmit(event) {
        event.preventDefault();
        handleClose();
        let users = getUserDataFromLocalStorage();
        let newMember = userDetails;
        newMember.id = uuidv4();
        newMember.createdDate = new Date();
        users.push(newMember);
        syncUserList(users);
    }

    function populateUserRecord() {
        const users = getUserSeed();
        syncUserList(users);
    }

    function showUserDetails(user) {
        setSelectedUser(user);
        handleShowViewModal();
    }

    function showUserDeleteModal(user) {
        setSelectedUser(user);
        handleShowDeleteModal();
    }

    function deleteUser(event) {
        let users = getUserDataFromLocalStorage();
        users = users.filter((item) => {
            return item.id !== selectedUser.id;
        });
        syncUserList(users);
        handleCloseDeleteModal();
    }

    function handleUpdateMember(data) {
        setUpdatedUser(data);
        handleShowUpdateModal();
    }

    function handleSubmitUpdatedUser(event) {
        event.preventDefault();
        let users = getUserDataFromLocalStorage();
        users = users.filter((item) => {
            return item.id !== updatedUser.id;
        });
        users = [...users, updatedUser];
        syncUserList(users);
        handleCloseUpdateModal();
    }

    useEffect(() => {
        populateUserRecord()
    }, [])

    return (
        <Container className='home-container'>
            <Row>
                <div className="page-header-extended">
                    <h2 className="page-title">TEAM MEMBERS INFO</h2>
                </div>
                <div className="starter-template">
                    <DataTableHeader
                        handleSearchInputChange={handleSearchInputChange}
                        handleShow={handleShow}
                    />
                    <DataTable
                        data={userList}
                        handleShow={showUserDetails}
                        handleUpdate={handleUpdateMember}
                        handleDelete={showUserDeleteModal}
                    />
                </div>
            </Row>

            <CreateModal
                show={showCreateModal}
                handleClose={handleClose}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
            />

            <ViewModal
                show={showViewModal}
                handleClose={handleCloseViewModal}
                data={selectedUser}
            />

            <UpdateModal
                show={showUpdateModal}
                handleClose={handleCloseUpdateModal}
                data={updatedUser}
                handleSubmit={handleSubmitUpdatedUser}
                handleDataChange={handleUserUpdateChange}
            />

            <DeleteModal
                show={showDeleteModal}
                handleClose={handleCloseDeleteModal}
                handleSubmit={deleteUser}
            />
        </Container>
    )
}

export default Home;