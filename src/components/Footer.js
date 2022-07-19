import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class Footer extends Component {
    render(){
        return(
            <div className='footerPosition footerPadding'>
               <div className='footerMenuItems'>
                    <NavLink exact to="/privacy">Privacy Notice</NavLink>
               </div>
               <div className='footerMenuItems'>
                    <a href="https://github.com/khairulafiq96/mysentimen" target="_blank">Contribute Now</a>
               </div>
               <div className='footerMenuItems'>
                    <NavLink exact to="/deletionGuide">Account Deletion Guide</NavLink>
               </div>

            </div>
        )
    }

}

export default Footer