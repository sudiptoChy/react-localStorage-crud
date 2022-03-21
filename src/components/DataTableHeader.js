import { Button } from 'react-bootstrap';

function DataTableHeader({ handleSearchInputChange, handleShow }) {
    return (
        <div className="info-table-header-block">
            <input type="text" placeholder="Search Members Here" id="member-search" name="searchInput" onChange={handleSearchInputChange}/>
            <Button size="sm" variant="primary" className="add-new-button" onClick={handleShow}>Add New</Button>
        </div>
    );
}

export default DataTableHeader;
