import { combineReducers } from "redux";
import user from "./users";
import politicians from "./politicians";

export default combineReducers({
    user,
    politicians
})