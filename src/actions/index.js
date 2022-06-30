import { setSignedInUser } from "./users";
import { getLeaderboard } from "./politicians";
import * as API from '../utils/api'

export function handleSignInUser(USER){
    return (dispatch)=> {
        dispatch(setSignedInUser(USER))
    }
}

export function handleLeaderboard(){
    return (dispatch) => {
        return API.getLeaderboardAPI().then((politicians)=>{
            //console.log(politicians)
            dispatch(getLeaderboard(politicians))
        })
    }
}

