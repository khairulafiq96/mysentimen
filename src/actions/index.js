import { setDeleteUser, setSignedInUser, verifyUser } from "./users";
import { getLeaderboard, getPoliticianScore } from "./politicians";
import * as API from '../utils/api'
import { getLiveVotes, clearLiveVotes, postVotes } from "./votes";

export function handleSignInUser(user){
    return (dispatch)=> {
        return API.verifyUser(user).then((currentuser)=>{
            dispatch(verifyUser(currentuser))
        })
    }
}

export function handleDeleteUser(user){
    return (dispatch) => {
        return API.deleteUserAPI(user).then((currentuser)=>{
            console.log("Running handle delete user")
            dispatch(setDeleteUser(user))
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

export function handlePoliticianScore(politicianid){
    return (dispatch)=>{
        return API.getPoliticianScoreAPI(politicianid).then((sentimen)=>{
            dispatch(getPoliticianScore(sentimen))
        })
    }
}


export function handleClearVotes(votes){
    return (dispatch) => {
        dispatch(clearLiveVotes(votes))
    }
}

export function handlePostVotes(votes){
    return (dispatch) =>{
        return API.postVotesAPI(votes).then((voteresponse)=>{
            dispatch(postVotes(voteresponse))
            //handleLiveVotes(votes['politicianid'])
        })
    }
}
