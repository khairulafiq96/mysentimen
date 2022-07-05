import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import {setLogoutUser, setSignedInUser} from '../actions/users'

import {connect} from 'react-redux';
import signedInUser from '../reducers/users';
import { handleSignInUser } from '../actions';

class FacebookLoginButton extends Component {
  
  
  state = {
    signedInUser: null,
    toHome : false
  }


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
            appId      : '389161429703517',
            cookie     : true,
            xfbml      : true,
            version    : 'v3.2'
          });    
        }
      }


    render( ){

        const {user} = this.props

        const responseFacebook = async (response) => {
            //this.checkSignedInUser()
            if (response){
              //console.log(response);
              //Change to handleSignUser
              await Promise.all([ 
                this.props.dispatch(setSignedInUser(response)),
                this.props.dispatch(handleSignInUser(response))
              ])
            } else {
              console.log('user is not signed in')
            }
          }

          const fbLogoutUser = (e)=> {
            e.preventDefault()
            console.log('running fbLogoutUser')
            window.FB.getLoginStatus((response)=> {
                if (response && response.status === 'connected') {
                    window.FB.logout((response)=>{
                        //document.location.reload();
                        //console.log(response.status)
                        this.props.dispatch(setLogoutUser())
                        
                    }
                    );
                }
            });
          }

           
        

        return (
            <div>

            
              {this.initializeFacebookSdk()}
                <FacebookLogin
                     appId="389161429703517"
                     autoLoad={false}
                     fields="name,email,picture"
                     callback={responseFacebook}
                     cssClass="btn-grad_facebook"/>
              
              
                  <button className='btn-grad_facebook' onClick={(e) => fbLogoutUser(e) }> Logout</button>         
            </div>
        )
    }
}


function mapStateToProps({users}) {
  return {
    users
  }
}


//export default FacebookLoginButton
export default connect(mapStateToProps)(FacebookLoginButton);