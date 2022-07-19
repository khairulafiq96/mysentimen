import React, {Component} from "react";
import FacebookDeleteAccountButton from "./FacebookDeleteAccountButton";
import {connect} from 'react-redux';
import  { Redirect } from 'react-router-dom'

class User_profileSetting extends Component {
render(){

    const {user} = this.props

    return(
    <div className="pageCenter">
        {user ? 
                <div className="pageCenter">
                    <br></br>
                    <br></br>
                    <div className="headerText">Your Profile</div>
                    <br></br>
                    <div><img src={user['picture']['data']['url']}></img></div>
                    <br></br>
                    <div className="settingsSubText">
                        <div>{user['name']}</div>
                        <div>{user['email']}</div>
                        <br></br>
                        <div>By Deleting your account, all of the 'Sentimen' and Your Profile data (User ID, Name, Email, Votes) will be deleted in the MySentimen DB</div>
                        <div>Your data related to the 'MySentimen' Facebook App will be deleted </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div><FacebookDeleteAccountButton signedInUser={user}></FacebookDeleteAccountButton></div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
        
        
        : <Redirect exact to='/'></Redirect>}
        
    </div>)
    }
}

function mapStateToProps({user}) {
    return {
      user
    }
  }

export default connect(mapStateToProps)(User_profileSetting)