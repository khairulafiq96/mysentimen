export const GET_LEADERBOARD = "GET_LEADERBOARD";

export function getLeaderboard(politicians) {
    return {
      type: GET_LEADERBOARD,
      politicians
    };
  }