import React, {Component} from "react";
import FacebookLogOutButton from "./FacebookLogOutButton";

class Header_loggedInUser extends Component {

    
    render(){

        const {signedInUser} = this.props


        return(
            <div className="signedInUser_noOverlap">
                <img className="signedInUser_Picture" src={signedInUser['picture']['data']['url']}></img>
                <div className="signedInUser_inline signedInUser_Name">{signedInUser['name']}</div>
                <div><FacebookLogOutButton></FacebookLogOutButton></div>
                
            </div>
        )
    }
}

export default Header_loggedInUser;