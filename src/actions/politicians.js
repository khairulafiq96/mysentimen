export const GET_LEADERBOARD = "GET_LEADERBOARD";
export const GET_POLITICIAN_SCORE = "GET_POLITICIAN_SCORE";

export function getLeaderboard(politicians) {
    return {
      type: GET_LEADERBOARD,
      politicians
    };
  }

  export function getPoliticianScore(politicians) {
    return {
      type: GET_POLITICIAN_SCORE,
      politicians
    };
  }