import React, {Component} from 'react'
import {connect} from 'react-redux';
import { handleLeaderboard, handlePoliticianScore } from '../actions';
import Politicians_card from './Politicians_card';
import Votes_live from './Votes_live';
import { handleLiveVotes } from '../actions';
import { clearLiveVotes } from '../actions/votes';
import Votes_add from './Votes_add';


class Politicians extends Component {

    componentDidMount= async () => {
        //await this.props.dispatch(handleLeaderboard())

        const {politician_id} = this.props.match.params
        console.log(politician_id)

        await Promise.all([
            this.props.dispatch(handleLeaderboard()),
            this.props.dispatch(handleLiveVotes(politician_id))])

            //function below will changed to politician to update the sentimen
            //Please complete after finish updating the leaderboard sentimen
            //this.props.dispatch(handlePoliticianScore(politician_id))])
            
        //if(!this.props.politicians){
        //   await this.props.dispatch(handleLeaderboard())
        //}

  
        
    }
    
    //clearing the votes upon leaving the page
    componentWillUnmount(){
        this.props.dispatch (clearLiveVotes())
    }


    render(){

        const {politicians, votes} = this.props
        const {politician_id} = this.props.match.params

        return (
            <div className='pageCenter'>
                {politicians ?
                    <div className='politician_container'>
                    <div className='Display-Name'><Politicians_card politicianDetail={politicians[politician_id]}></Politicians_card></div>
                    {votes ?<div className="Live-Comments liveCommentCard"> <Votes_live liveVote={votes}></Votes_live> </div>: <p>Loading</p>}
                    </div>
                    
                : <p>Loading</p>}
                
                <div className='comment_Location'> <Votes_add politicianId={politician_id}></Votes_add></div>
            </div>
        )
    }
}

function mapStateToProps({politicians, votes}) {
    return {
      politicians,
      votes
    }
  }


export default connect(mapStateToProps)(Politicians)