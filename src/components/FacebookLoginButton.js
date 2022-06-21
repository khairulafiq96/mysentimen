import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
 

class FacebookLoginButton extends Component {
    
    initializeFacebookSdk() {

        /* Asynchronous flow: if the global 'FB' variable is still undefined,
           then the facebook script hasn't loaded yet, in that case, provide
           a global callback that will be called by the facebook code. If the 
           variable is already present, just call the code right away and forget
           about the callback. */
        if(window.FB === undefined) {
          console.log('FB undefined -> provide callback');
          window.fbAsyncInit = function() {
            initialize();
          };
        }
        else {
          console.log('FB defined -> call init right away');
          initialize();
        }
      
        function initialize() {
          console.log("Running initialization")
          window.FB.init({
            appId      : '',
            cookie     : true,
            xfbml      : true,
            version    : 'v3.2'
          });    
        }
      }


    render(){

        const responseFacebook = (response) => {
            console.log(response);
          }

          const componentClicked = (response) => {
            console.log(response);
          }

        return (
            <div>
                {this.initializeFacebookSdk()}
                <FacebookLogin
                    appId=""
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={componentClicked}
                    callback={responseFacebook} />
                
                <br></br>
            </div>
        )
    }
}

export default FacebookLoginButton