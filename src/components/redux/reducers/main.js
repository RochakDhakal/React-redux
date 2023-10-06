import { combineReducers } from "redux";
import counter from "./counter";
import deCounter from "./demo";
import toDo from "./todo";

const rootReducer = combineReducers({ counter, deCounter, toDo });
export default rootReducer;
