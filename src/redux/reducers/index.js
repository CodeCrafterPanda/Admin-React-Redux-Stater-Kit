import { combineReducers } from "redux";
import sideBarReducer from "../modules/sideBar";
import spinnerReducer from "../modules/spinner";
import notificationReducer from "./notification";
import serviceReducer from "./service";

const reducers = combineReducers({
	sidebar: sideBarReducer,
	notification: notificationReducer,
	spinner: spinnerReducer,
	service: serviceReducer,
});

export default reducers;
