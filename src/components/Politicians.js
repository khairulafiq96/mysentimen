import React, {Component} from 'react'
import {connect} from 'react-redux';
import { handleLeaderboard } from '../actions';
import Politicians_card from './Politicians_card';

class Politicians extends Component {

    componentDidMount= async () => {
        //await this.props.dispatch(handleLeaderboard())
        if(!this.props.politicians){
            await this.props.dispatch(handleLeaderboard())
        }
        
    }



    render(){

        const {politicians} = this.props
        const {politician_id} = this.props.match.params

        return (
            <div className='pageCenter'>
                {politicians ?
                    <Politicians_card politicianDetail={politicians[politician_id]}></Politicians_card>
                : <p>Loading</p>}
            </div>
        )
    }
}

function mapStateToProps({politicians}) {
    return {
      politicians
    }
  }


export default connect(mapStateToProps)(Politicians)