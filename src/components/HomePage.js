import React, {Component} from 'react'
import FacebookLoginButton from './FacebookLoginButton'
import {NavLink} from 'react-router-dom'


class HomePage extends Component {
    render(){
        return(
            <div className='homePreventOverlap'>
                <div className='homeTextHeader'>Build conversations about our leaders</div>
                <br></br>
                <br></br>
                <div className='homeTextSubHeader'>Look about their sentimen</div>
                <br></br>
                    <div className='centerButton'>
                        <NavLink exact to='/charts' className='btn-grad_mysentimen_chart'>MySentimen Charts</NavLink>
                    </div>
                <br></br>
                <br></br>
                <br></br>
                <div className='homeTextSubHeader'>Join the conversation now</div>
                <br></br>
                <div className='centerButton'><FacebookLoginButton></FacebookLoginButton></div>
            </div>
        )
    }

}

export default HomePage