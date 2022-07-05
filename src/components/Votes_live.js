import moment from 'moment';
import React, {Component} from 'react'
import {connect} from 'react-redux';
import { handleLiveVotes } from '../actions';



class Votes_live extends Component {

    


    render(){

        const {liveVote} = this.props

        function convertTimestamp(time){
            return (new Date(time)).toUTCString()
        }

        function convertSentimen(sentimen){
            if(sentimen === true){
                return (<div  className='btn-grad_Sentimen_Support'>Support</div>)
            } else if ( sentimen === false){
                return (<div  className='btn-grad_Sentimen_Against'>Against</div>)
            }
        }

        return (
            <div className='liveCommentCard_padding'>
                <div className='liveCommentCard_Header'>
                    Live Votes
                </div>
                {liveVote ? 
                    Object.keys(liveVote).map(function(keyName, keyIndex){
                        return (
                            <div key={keyName} className='liveComment_IndividualCard'>
                                <div className='liveCommentCard_Username'>{liveVote[keyName]['userid']}</div>
                                <div className='liveComment_Sentimen'>{convertSentimen(liveVote[keyName]['sentimen'])}</div>
                                <div className='liveCommentCard_Timestamp'>{convertTimestamp(liveVote[keyName]['timestamp'])}</div>
                                <div className='liveComment_Comment'>{liveVote[keyName]['comments']}</div>
                                
                            </div>
                        )
                    })
                    : 
                    <div>Loading</div>}
            </div>
        )
    }
}

function mapStateToProps({votes}) {
    return {
      votes
    }
  }

export default connect(mapStateToProps)(Votes_live)