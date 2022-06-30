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
        return (
            <div className='pageCenter'>
                <br></br>
                <br></br>

                <table className='chartPadding'>
                    <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Party</th>
                        <th>Sentimen</th>
                    </tr>
                        {politicians ? Object.keys(politicians).map(function(keyName, keyIndex){
                        
                            return(
                            <tr key={keyName}>
                                <td><NavLink exact to={"politicians/" + keyName}>{politicians[keyName]['name']}</NavLink></td>
                                <td>{politicians[keyName]['position']}</td>
                                <td>{politicians[keyName]['party']}</td>
                                <td>{politicians[keyName]['sentimen']}</td>
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