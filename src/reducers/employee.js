import { actionTypes } from "../actions/employees";
const INITIAL_STATE = {
  updating: false,
  page: 0,
  totalItems: 0,
  employees: [],
};

const employeeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PAGE_EMPLOYEE: {
      return { ...state, page: action.payload };
    }
    case actionTypes.EMPLOYEE_LIST: {
      return { ...state, ...action.payload, updating: false };
    }

    case actionTypes.UPDATE_EMPLOYEE: {
      const updatedEmployeeList = state.employees.map((employee) => {
        if (employee.id == action.payload.id) {
          return { ...employee, ...action.payload };
        }
        return employee;
      });

      return { ...state, employees: updatedEmployeeList, updating: false };
    }

    case actionTypes.DELETE_EMPLOYEE: {
      const updatedEmployeeList = state.employees.filter(
        (employee) => employee.id !== action.payload
      );

      return { ...state, employees: updatedEmployeeList, updating: false };
    }

    case actionTypes.UPDATING: {
      return { ...state, updating: true };
    }

    default: {
      return state;
    }
  }
};

export default employeeReducer;
