import { GET_LEADERBOARD, GET_POLITICIAN_SCORE } from "../actions/politicians";

export default function politicians(state = null, action) {
    switch (action.type) {
      case GET_LEADERBOARD:
        return {...state,
                ...action.politicians};
                
      case GET_POLITICIAN_SCORE :
        var key = Object.keys(action.politicians)
        var value = Object.values(action.politicians)

        const newState = {...state}
        newState[key[0]] = {...state[key[0]], 'sentimen' : value[0]['sentimen']}

        //console.log(state[key[0]])

        return {...state,...newState};
  
      default:
        return state;
    }
  }
