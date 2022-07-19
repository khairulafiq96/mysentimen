const url = 'http://127.0.0.1:5000'
//const url = 'https://mysentimenapi.herokuapp.com'


  var obj = {  
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

//Login Page
export function verifyUser(user){

var obj = {  
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            //HAD to JSON stringify because the body datatype is Object and the API could not process any Object item
            body: JSON.stringify({
              'id' : user['id'],
              'name' : user['name'],
              'email' : user['email'],
              
            }) 
          }
  return fetch(url+'/verifyUserDB', obj).then(function(res) {
      //console.log(res)
      return res.json();
     })
    .then(function(resJson) {
      //console.log(resJson)
      return resJson;
     })
}

//Charts page
export function getLeaderboardAPI(){
    return fetch(url+'/getLeaderboard', obj).then(function(res) {
        //console.log(res)
        return res.json();
       })
      .then(function(resJson) {
        //console.log(resJson)
        return resJson;
       })
}

//Politicians Page
export function getLiveVotesAPI(politicianid){

  //Had to use the politicianid in the header as react blocks any GET request with a body
  var liveVotesRequest = {  
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'politicianid' : politicianid
    }
  }

  return fetch(url+'/liveVotes', liveVotesRequest ).then(function(res) {
      //console.log(res)
      return res.json();
     })
    .then(function(resJson) {
      //console.log(resJson)
      return resJson;
     })
}

export function getPoliticianScoreAPI(politicianid){
  var obj = {  
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    //HAD to JSON stringify because the body datatype is Object and the API could not process any Object item
    body: JSON.stringify({
      'politicianid' : politicianid,
    }) 
  }
  return fetch(url+'/politicianScore', obj).then(function(res) {
      //console.log(res)
      return res.json();
      })
      .then(function(resJson) {
      //console.log(resJson)
      return resJson;
})
}


//Post votes API
export function postVotesAPI(votes){

  var obj = {  
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              //HAD to JSON stringify because the body datatype is Object and the API could not process any Object item
              body: JSON.stringify({
                'comments' : votes['comments'],
                'politicianid' : votes['politicianid'],
                'userid' : votes['userid'],
                'sentimen' : votes['sentimen'],
                
              }) 
            }
    return fetch(url+'/postVotes', obj).then(function(res) {
        //console.log(res)
        return res.json();
       })
      .then(function(resJson) {
        //console.log(resJson)
        return resJson;
       })
  }


//Delete User DB
export function deleteUserAPI(user){

  var obj = {  
              method: 'DELETE',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              //HAD to JSON stringify because the body datatype is Object and the API could not process any Object item
              body: JSON.stringify({
                'userID' : user['userID']
              }) 
            }
    return fetch(url+'/deleteUserDB', obj).then(function(res) {
        //console.log(res)
        return res.json();
       })
      .then(function(resJson) {
        //console.log(resJson)
        return resJson;
       })
  }
