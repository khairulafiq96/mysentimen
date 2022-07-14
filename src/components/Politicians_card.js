import React, {Component} from 'react'
import {connect} from 'react-redux';
import { handleLeaderboard } from '../actions';

class Politicians_card extends Component {



    render(){

        const {politicianDetail, politicianId} = this.props

        function renderSentimen(sentimen){

            if(sentimen >= 0){
                return(<div className='btn-grad_Sentimen_Support politcianCard_SentimenText'>{sentimen}§</div>)
            } else {
                return(<div className='btn-grad_Sentimen_Against politcianCard_SentimenText'>{sentimen}§</div>)
            }
            
        }


        return (
            <div className='politicianCard'>
                <div className='politicianCard_padding'>
                <div className='politicianCard_picturePosition'>
                    <img className='politicianCard_picture' src={'https://raw.githubusercontent.com/khairulafiq96/Repo_Media/master/mysentimen/'+ politicianId+'.jpg'}>
                        </img>
                </div>
                <div className='politicianDetailInline'>
                    <div className='politicianCard_name'> #{politicianDetail['rank']} {politicianDetail['name']} </div>
                        <div className='politicianCard_subtext politicianCard_subtextPadding'>
                            <div>{politicianDetail['position']}</div>
                            <div>{politicianDetail['party']}</div>
                            
                    </div>
                    
                </div>
                <div className='politicianSentimenPadding' >{renderSentimen(politicianDetail['sentimen'])}</div>
                
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