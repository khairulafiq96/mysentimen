import React, {Component} from 'react'
import FacebookLoginButton from './FacebookLoginButton'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux';
import HomePage_Popup from './HomePage_Popup';


class HomePage extends Component {
    render(){

        const {user} = this.props
        const buttonTheme = "btn-grad_facebook";

        return(
            <div className='homePreventOverlap'>
                <div className='homeTextHeader'>Build conversations about our leaders</div>
                <br></br>
                <br></br>
                <div className='homeTextSubHeader'>Look about their sentimen</div>
                <br></br>
                <br></br>
                    <div className='centerButton'>
                        <NavLink exact to='/charts' className='btn-grad_home_Leaders metro'>Leaders</NavLink>
                    </div>
                <br></br>
                <div className='homeTextSubHeader'>Join the conversation now</div>
                <br></br>
                <div className='centerButton'>
                    {user ? 
                          <div className='btn-grad_HomePage_SignedInUser'>You are already logged in</div>
                          :
                          <FacebookLoginButton buttonTheme={buttonTheme}></FacebookLoginButton>
                          }
                    
                
                
                </div>
            </div>
        )
    }

}

function mapStateToProps({user}) {
    return {
        user
    }
  }

export default connect(mapStateToProps)(HomePage)