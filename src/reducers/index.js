import { combineReducers } from "redux";
import user from "./users";
import politicians from "./politicians";
import votes from "./votes";

export default combineReducers({
    user,
    politicians,
    votes
})