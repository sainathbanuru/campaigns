import axios from "axios";
import { BASE_URL } from "../constants";

export const actionTypes = {
  EMPLOYEE_LIST: "employeeList",
  UPDATE_EMPLOYEE: "updateEmployee",
  DELETE_EMPLOYEE: "deleteEmployee",
  UPDATING: "fetchingList",
  ERROR: "error",
  UPDATE_PAGE_EMPLOYEE: "updatePageEmployee",
};

export const updatePage = (page) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.UPDATE_PAGE_EMPLOYEE,
      payload: page,
    });
  };
};

export const fetchingEmployees = (page, per_page) => (dispatch) => {
  dispatch({ type: actionTypes.UPDATING });
  axios
    .get(`${BASE_URL}users?page=${page}&per_page=${per_page}`)
    .then((response) => {
      dispatch({
        type: actionTypes.EMPLOYEE_LIST,
        payload: {
          totalItems: response.data.total,
          employees: response.data.data,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.ERROR,
        payload: { error: JSON.stringify(error) },
      });
    });
};

export const updateEmployee = (id, body) => (dispatch) => {
  dispatch({ type: actionTypes.UPDATING });
  axios
    .patch(`${BASE_URL}users/${id}`, body)
    .then((response) => {
      dispatch({
        type: actionTypes.UPDATE_EMPLOYEE,
        payload: { id, ...response.data },
      });
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.ERROR,
        payload: { error: JSON.stringify(error) },
      });
    });
};

export const deleteEmployee = (id) => (dispatch) => {
  dispatch({ type: actionTypes.UPDATING });
  axios
    .delete(`${BASE_URL}users/${id}`)
    .then((response) => {
      dispatch({
        type: actionTypes.DELETE_EMPLOYEE,
        payload: id,
      });
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.ERROR,
        payload: { error: JSON.stringify(error) },
      });
    });
};
