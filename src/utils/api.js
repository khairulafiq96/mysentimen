const url = 'http://127.0.0.1:5000/'


  var obj = {  
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }


export function getLeaderboardAPI(){
    return fetch('http://127.0.0.1:5000/getLeaderboard', obj).then(function(res) {
        //console.log(res)
        return res.json();
       })
      .then(function(resJson) {
        console.log(resJson)
        return resJson;
       })
}

