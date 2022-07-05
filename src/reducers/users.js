import { SET_SIGNED_IN_USER, SIGN_OUT_USER, VERIFY_USER } from "../actions/users";

export default function user(state = null, action) {
    switch (action.type) {
      case SET_SIGNED_IN_USER:
        return {...state,
                ...action.user};

      case VERIFY_USER:
        return {
                ...state,
                ...action.user
                }
      
      case SIGN_OUT_USER:
        return {
                ...action.user = null
                }
  
      default:
        return state;
    }
  }
