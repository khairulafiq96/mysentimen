import { GET_LIVE_VOTES, CLEAR_LIVE_VOTES } from "../actions/votes";


export default function votes(state = null, action) {
    switch (action.type) {
      case GET_LIVE_VOTES:
        return {...state,
                ...action.votes};
  

      case CLEAR_LIVE_VOTES:
        return {
                  ...action.votes = {}
                }

      default:
        return state;
    }
  }
