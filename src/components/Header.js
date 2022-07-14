import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import Header_loggedInUser from './Header_loggedInUser'
import {connect} from 'react-redux';
import FacebookLoginButton from './FacebookLoginButton';

class Header extends Component {
    render(){

        const {user} = this.props
        const buttonTheme = "btn-grad_header_login";

        return(
            <div className='headerBorder headerText headerPadding'>
                <NavLink exact to='/home' className='headerInline headerMenu'>
                    MySentimen (Alpha)
                </NavLink>
                <NavLink exact to='/charts' className='headerInline headerMenu'>
                    Charts
                </NavLink>
                <div className='headerInline headerMenu'>
                    Leaders
                </div>
                
                {user ?
                    <div className='loginButtonPosition'>
                        <Header_loggedInUser signedInUser={user}></Header_loggedInUser> 
                    </div>
                    : 
                    <div className='headerInline loginButtonPosition'>
                        <FacebookLoginButton buttonTheme={buttonTheme}></FacebookLoginButton>
                    </div>}
            </div>
        )
    }

}

function mapStateToProps({user}) {
    return {
        user
    }
  }


export default connect(mapStateToProps)(Header)