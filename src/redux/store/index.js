import { applyMiddleware, createStore } from "redux";
import UNI_MIDDLEWARE from "../middlewares";
import reducers from "../reducers";

let store = createStore(reducers, applyMiddleware(...UNI_MIDDLEWARE));
export default store;
