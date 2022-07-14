import React, {Component} from "react";
import {connect} from 'react-redux';
import { setLogoutUser } from "../actions/users";

class FacebookLogOutButton extends Component {

    clearUserStore(user){
        //e.preventDefault()
        this.props.dispatch(setLogoutUser(user))
    }
    
    
    render(){
    
    const {user} = this.props

    

    const fbLogoutUser = (e) => {
        e.preventDefault()
        console.log('running fbLogoutUser')
        
        window.FB.getLoginStatus((response)=> {
            
            if (response && response.status === 'connected') {
                
                window.FB.logout((response)=>{
                    //Had to use arrow function to pass this.props normal function will not detect this.props
                    //Unable to get the response headers of the function FB logout
                    this.props.dispatch(setLogoutUser(user))
                    //console.log(response.headers)
                    
                });
            }
        })
        }
        return(
            <div>
                
                <button className='btn-grad_logout' onClick={(e)=>fbLogoutUser(e)}> Logout</button> 
                
            </div>
        )
    }
}

function mapStateToProps({user}) {
    return {
        user
    }
  }

export default connect(mapStateToProps)(FacebookLogOutButton);