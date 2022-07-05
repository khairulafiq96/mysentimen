export const GET_LIVE_VOTES = "GET_LIVE_VOTES";
export const CLEAR_LIVE_VOTES = "CLEAR_LIVE_VOTES";

export function getLiveVotes(votes) {
    return {
      type: GET_LIVE_VOTES,
      votes
    };
  }

export function clearLiveVotes (votes){
  return {
    type : CLEAR_LIVE_VOTES,
    votes
  };
}