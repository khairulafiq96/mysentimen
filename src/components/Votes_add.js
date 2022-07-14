import React,{Component} from "react";
import {connect} from 'react-redux';
import { handlePostVotes } from "../actions";

class Votes_add extends Component{

    state = {
        comments: "",
        sentimen:null
      };

    handleComment = (e) => {
        let comment = e.target.value;

        this.setState(() => ({
            comments: comment,
        }));
        };

    handleSubmit = async (e) => {
        e.preventDefault();
        const {dispatch, user, politicianId} = this.props
        const { comments , sentimen } = this.state

        var obj = {
            "comments" : comments,
            "politicianid" : politicianId,
            "userid" : user['id'],
            "sentimen" : sentimen
        }

        await dispatch(handlePostVotes(obj)).then(()=>
            this.clearValue()
        )   


    }

    clearValue() {
        //console.log(typeof(event.target.value));
        this.setState(() => ({
            comments: "",
            sentimen:null
        }))
        
      }


    setValue(event) {
        event.preventDefault();
        console.log(this.convertToBool(event.target.value))
        /*console.log(event.target)
        if(event.target.style.outline === ""){
            event.target.style.outline = '1px solid black'
        } else {
            event.target.style.outline = ''
        }*/
        //console.log(this.setState)
        
        

        this.setState(() => ({
            sentimen: this.convertToBool(event.target.value)
        }))
      }

    //Somehow event.target.value returns as strings therefore needs to be converrted into boolean properly
    convertToBool(value){
        if (value==='true'){
            return true
        } else {
            return false
        }
    }

    render(){

        const {comments, sentimen, buttonSupport, buttonAgainst} = this.state
        const {user} = this.props

        return (
            <div>
                <form>
                   
                    <textarea
                        type='text'
                        placeholder='Add your comment!'
                        value={comments}
                        onChange={this.handleComment}
                        > 
                    </textarea>
                    <div className="comment_sentimenLocation">
                        <button className="btn-grad_commentSupport" style={buttonSupport} onClick={(e)=>this.setValue(e)} value={true}>Support {sentimen===true ? <div className="emojiLocation"> &#9989;</div>: ""}</button>
                        <button className="btn-grad_commentAgainst" style={buttonAgainst} onClick={(e)=>this.setValue(e)} value={false}>Against  {sentimen===false ? <div className="emojiLocation"> &#9989;</div>: ""}</button>
                    </div>

                    {user ? <button className="btn-grad_commentSubmit" onClick={(e)=>this.handleSubmit(e)}>Submit</button> : <p className="btn-grad_commentSignIn">Sign in and contribute !</p> }
                    

                </form>
            </div>
        )
    }
}

function mapStateToProps({user}) {
    return {
        user
    }
  }

export default connect(mapStateToProps)(Votes_add);