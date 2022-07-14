import react, {Component} from 'react'
import { getLeaderboard } from '../actions/politicians'
import {connect} from 'react-redux';
import { handleLeaderboard } from '../actions';
import {NavLink} from 'react-router-dom'

class Charts extends Component {

    componentDidMount= async () => {
        await this.props.dispatch(handleLeaderboard())
    }

    
    render () {

        const {politicians} = this.props

        function renderSentimen(sentimen){

            if(sentimen >= 0){
                return(<div className='btn-grad_Sentimen_Support sentimenText'>{sentimen}§</div>)
            } else {
                return(<div className='btn-grad_Sentimen_Against sentimenText'>{sentimen}§</div>)
            }
            
        }

        return (
            <div className='pageCenter'>
                <br></br>
                <div className='chartHeader'> Malaysian Cabinet 2021</div>
                <br></br>
                <br></br>
               
                <table>
                    <tbody>
                    <tr>
                        <th>Rank </th>
                        <th>Name</th>
                        <th>Sentimen</th>
                        <th>Position</th>
                        <th>Party</th>
                        
                    </tr>
                        {politicians ? Object.keys(politicians).map(function(keyName, keyIndex){
                        
                            return(
                            <tr key={keyName}>
                                <td className='rankAlign'>{politicians[keyName]['rank']}</td>
                                <td>
                                    <div className='politicianPictureOverlap'>
                                        <img className='politicianPicture' src={'https://raw.githubusercontent.com/khairulafiq96/Repo_Media/master/mysentimen/'+keyName+'.jpg'}></img>
                                        <NavLink className='politicianName_Chart' exact to={"politicians/" + keyName}>{politicians[keyName]['name']}</NavLink>
                                    </div>
                                </td>
                                <td>{renderSentimen(politicians[keyName]['sentimen'])}</td>
                                <td>{politicians[keyName]['position']}</td>
                                <td>{politicians[keyName]['party']}</td>
                                
                            </tr>)
                        }) : 
                            <tr key="loading">
                                <td>Loading</td>
                                <td>Loading</td>
                                <td>Loading</td>
                                <td>Loading</td>
                            </tr> }
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps({politicians}) {
    return {
        politicians
    }
  }

export default connect(mapStateToProps)(Charts)