import { combineReducers } from "redux";
import campaigns from "./campaign";
import employees from "./employee";

export default combineReducers({
  campaigns,
  employees,
});
