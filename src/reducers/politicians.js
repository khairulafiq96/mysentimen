import { GET_LEADERBOARD } from "../actions/politicians";

export default function politicians(state = null, action) {
    switch (action.type) {
      case GET_LEADERBOARD:
        return {...state,
                ...action.politicians};
  
      default:
        return state;
    }
  }
