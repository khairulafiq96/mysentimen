import { setSignedInUser, verifyUser } from "./users";
import { getLeaderboard } from "./politicians";
import * as API from '../utils/api'
import { getLiveVotes, clearLiveVotes } from "./votes";

export function handleSignInUser(user){
    return (dispatch)=> {
        return API.verifyUser(user).then((currentuser)=>{
            dispatch(verifyUser(currentuser))
        })
    }
}

//Charts Page, Leaderboard
export function handleLeaderboard(){
    return (dispatch) => {
        return API.getLeaderboardAPI().then((politicians)=>{
            //console.log(politicians)
            dispatch(getLeaderboard(politicians))
        })
    }
}

//Politicians page
export function handleLiveVotes(politicianid){
    return (dispatch) => {
        return API.getLiveVotesAPI(politicianid).then((votes)=>{
            //console.log(politicians)
            //dispatch(getLeaderboard(votes))
            dispatch(getLiveVotes(votes))
        })
    }
}


export function handleClearVotes(votes){
    return (dispatch) => {
        dispatch(clearLiveVotes(votes))
    }
}

