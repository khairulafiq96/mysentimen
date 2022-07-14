import React, {Component} from 'react'
import {connect} from 'react-redux';
import { handleLeaderboard } from '../actions';

class Politicians_card extends Component {



    render(){

        const {politicianDetail} = this.props


        return (
            <div className='politicianCard'>
                <div className='politicianCard_padding'>
                <div className='politicianCard_name'>{politicianDetail['name']}</div>
                    <div className='politicianCard_subtext politicianCard_subtextPadding'>
                        <div>{politicianDetail['position']}</div>
                        <div>{politicianDetail['party']}</div>
                        <div>{politicianDetail['sentimen']}</div>
                    </div>
                
                </div>
            </div>
        )
    }
}

function mapStateToProps({politicians}) {
    return {
      politicians
    }
  }


export default connect(mapStateToProps)(Politicians_card)