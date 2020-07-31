import React, { useState, useEffect } from "react";
import Header from "./Header";
import Table from "./Table";
import { connect } from "react-redux";
import {
  fetchingEmployees,
  updateEmployee,
  deleteEmployee,
  updatePage,
} from "../actions/employees";
import { PER_PAGE_EMPLOYEES } from "../constants";
import Popup from "./Popup";
import Pagination from "./Pagination";

const Employees = (props) => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    props.fetchingEmployees(props.page + 1, PER_PAGE_EMPLOYEES);
  }, [props.page]);
  const toggleShowUpdateModal = (value) => {
    setShowUpdateModal(value);
  };

  const onUpdateClicked = () => {
    const updateBody = {
      first_name: firstName,
      last_name: lastName,
      email,
      id: selectedId,
    };
    props.updateEmployee(selectedId, updateBody);
    toggleShowUpdateModal(false);
  };

  const onEditClick = (item) => {
    setFirstName(item.first_name);
    setLastName(item.last_name);
    setEmail(item.email);
    setSelectedId(item.id);
    setShowUpdateModal(true);
  };

  const onDeleteClick = (item) => {
    props.deleteEmployee(item.id);
  };

  const { employees, page, totalEmployees } = props;

  if (props.updating) {
    return <div className="loader"></div>;
  }

  return (
    <div className="container">
      <Header />
      <Table
        tableItems={employees}
        gridColumns={"0.5fr 1fr 1fr 1fr 0.5fr"}
        headings={["Firstname", "Last Name", "Email", "Actions"]}
        onDeleteClick={onDeleteClick}
        onEditClick={onEditClick}
      />

      <Pagination
        numberOfpages={Math.ceil(totalEmployees / PER_PAGE_EMPLOYEES)}
        page={page}
        updatePage={(page) => props.updatePage(page)}
      />

      <Popup
        showModal={showUpdateModal}
        onClose={() => toggleShowUpdateModal(false)}
      >
        <div className="popupContentContainer">
          <p className="inputLabel">First Name</p>

          <input
            className="inputBox"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />

          <p className="inputLabel">Last Name</p>

          <input
            className="inputBox"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          <p className="inputLabel">Email</p>
          <input
            className="inputBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="updateButton" onClick={onUpdateClicked}>
            Update
          </button>
          <p
            className="canceltext"
            style={{ textAlign: "center", color: "steelblue" }}
            onClick={() => toggleShowUpdateModal(false)}
          >
            Cancel
          </p>
        </div>
      </Popup>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    page: state.employees.page,
    employees: state.employees.employees,
    totalEmployees: state.employees.totalItems,
    updating: state.employees.updating,
  };
};

export default connect(mapStateToProps, {
  fetchingEmployees,
  updateEmployee,
  deleteEmployee,
  updatePage,
})(Employees);
