import React from "react";
import {Col, Table } from "react-bootstrap";

function DataTable({ data, handleShow, handleUpdate, handleDelete }) {
    return (
        <React.Fragment>
            <Table striped bordered hover size="sm" responsive>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Designation</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.map((data, idx )=> {
                        return (
                            <tr key={data.id}>
                                <td>{data.firstName}</td>
                                <td>{data.lastName}</td>
                                <td>{data.email}</td>
                                <td>{data.age} yrs</td>
                                <td>{data.designation}</td>
                                <td>
                                    <Col className="action-buttons">
                                        <i className="fa fa-solid fa-eye" style={{ 'marginRight': '4px' }}
                                            onClick={() => handleShow(data)}> </i>
                                        <i className="fa fa-solid fa-pencil" style={{'marginRight': '4px'}} onClick={() => {handleUpdate(data)}}></i>
                                        <i className="fa fa-solid fa-trash" onClick={() => handleDelete(data)}></i>
                                    </Col>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
        {
            data.length < 1 &&
            <div className="show-table-info hide">
                <div className="alert alert-info center">
                    <strong>No Data Found, Please Enter Some Data</strong>
                </div>
            </div>
        }
        </React.Fragment>
    )
}

export default DataTable;