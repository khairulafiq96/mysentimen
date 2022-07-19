import React,{Component} from "react";
import {handleDeleteUser}  from '../actions'
import {connect} from 'react-redux';


class FacebookDeleteAccountButton extends Component {


    facebookDeleteUserAPI = async (e,signedInUser) => {
        //console.log(id)
        const {dispatch} = this.props
        e.preventDefault();
        var path = "/"+signedInUser['id']+"/"
        await window.FB.api(path,'delete',function (res) {
            if (res && !res.error && res['success']===true) {
              /* handle the result */
              console.log(res)
              dispatch(handleDeleteUser(signedInUser))
              
              //return res;
            } else if(res.error){
              //return res.error
            }
          }
        );
      }



    render(){

        const {signedInUser} = this.props
        //onClick={(e)=>fbLogoutUser(e)}


        //Delete User API
        //Guide on deleting user
        //https://developers.facebook.com/docs/javascript/reference/FB.api/



        return(<div>
         <button className="btn-grad_logout" onClick={(e)=>this.facebookDeleteUserAPI(e,signedInUser)} >Delete Account</button>   
        </div>)
    }
}

function mapStateToProps({user}) {
    return {
        user
    }
  }


export default connect(mapStateToProps)(FacebookDeleteAccountButton)