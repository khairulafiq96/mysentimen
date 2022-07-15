import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import Header_loggedInUser from './Header_loggedInUser'
import {connect} from 'react-redux';
import FacebookLoginButton from './FacebookLoginButton';

class Header extends Component {
    render(){

        const {user} = this.props
        const buttonTheme = "btn-grad_facebook_header";

        return(
            <div className='headerBorder headerText headerPadding'>
                <NavLink exact to='/' className='headerInline headerMenu'>
                    MySentimen (Alpha)
                </NavLink>
                <NavLink exact to='/charts' className='headerInline headerMenu'>
                    Leaders
                </NavLink>
                
                
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