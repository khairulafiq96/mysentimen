import React, {Component} from 'react'
import FacebookLoginButton from './FacebookLoginButton'


class HomePage extends Component {
    render(){
        return(
            <div>
                <div className='homeTextHeader'>Build conversations about our leaders</div>
                <br></br>
                <br></br>
                <div className='homeTextSubHeader'>Look about their sentimen</div>
                <div className='homeTextSubHeader'><FacebookLoginButton></FacebookLoginButton></div>
                <br></br>
                <br></br>
                <br></br>
                <div className='homeTextSubHeader'>Join the conversation now</div>
                <br></br>
                <br></br>
                <div className='homeTextSubHeader'>Button</div>
            </div>
        )
    }

}

export default HomePage