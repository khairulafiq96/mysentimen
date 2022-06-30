import { SET_SIGNED_IN_USER } from "../actions/users";

export default function user(state = null, action) {
    switch (action.type) {
      case SET_SIGNED_IN_USER:
        return {...state,
                ...action.user};
  
      default:
        return state;
    }
  }
