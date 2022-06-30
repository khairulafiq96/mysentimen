import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class Header extends Component {
    render(){
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
                <button className='headerInline loginButtonPosition btn-grad_header_login'>
                    Sign Up
                </button>
            </div>
        )
    }

}

export default Header