import { combineReducers } from "redux";
import { organizationHandler } from "./Organizations/orgReducers";
import { userHandler } from "./Users/userReducer";

export default combineReducers({
    organizationHandler,
    userHandler
})