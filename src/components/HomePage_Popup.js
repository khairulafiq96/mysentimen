import React, {Component} from "react";


class HomePage_Popup extends Component {

    state = {
        toggle : false
      };


    render(){
        return (
        <div className="popup_container">
            <div className="popup_setFlex">
                This site is currently on Alpha, some features are unavailable
                <div >
                    <button className="popup_button" onClick={() => this.setState({ toggle: !this.state.toggle })}>
                        {this.state.toggle ? 
                            <a>Show Less</a> 
                            : 
                            <a>Show More</a>}</button>
                </div>
            </div>
                

            {this.state.toggle ? 
                                <div>
                                <ol>
                                    <li>Mysentimen API Authentication</li>
                                    <li>Realtime Live Votes</li>
                                    <li>Live Charts</li>
                                    <li>Politician Live Score</li>
                                    <li>Live Charts User Details</li>
                                </ol>                               
                                </div>
                                :
                                <div></div>}

        </div>)
    }
}

export default HomePage_Popup