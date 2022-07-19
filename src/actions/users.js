export const SET_SIGNED_IN_USER = "SET_SIGNED_IN_USER";
export const SIGN_OUT_USER = "SIGN_OUT_USER";
export const VERIFY_USER = "VERIFY_USER";
export const DELETE_USER = "DELETE_USER";

export function setSignedInUser(user) {
    return {
      type: SET_SIGNED_IN_USER,
      user
    };
  }

  export function verifyUser(user) {
    return {
      type: VERIFY_USER,
      user
    };
  }

  export function setLogoutUser(user) {
    return {
      type: SIGN_OUT_USER,
      user
    };
  }

  export function setDeleteUser(user){
    return {
      type : DELETE_USER,
      user
    }
  }