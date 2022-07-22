import React, {Component} from "react";


class HomePage_Popup extends Component {

    state = {
        toggle : false
      };

    toggle (myBool){
        if (myBool === 'true'){
            return (
            <div>
                <ol>
                    <li>Mysentimen API OAuth</li>
                    <li>Realtime Live Votes</li>
                    <li>Facebook Login API</li>
                    <li>Live Charts</li>
                    <li>Politician Live Score</li>
                </ol>
                <br></br>
                <button value={false} onClick={(e)=>this.toggleMessage(e)}> Show Less</button>
            </div>)
        } else if (myBool === 'false') {
            return(<div></div>)
        }
    }

    toggleMessage = (e) => {

        let myToggle = e.target.value;

        console.log(myToggle)

        this.setState(() => ({
            toggle: myToggle,
        }));
        };

    render(){

        

        return (
        <div className="pageCenter">
            This site is currently on Alpha, some features are unavailable : <button value={true} onClick={(e)=>this.toggleMessage(e)}> Show More</button>
            {this.toggle(this.state.toggle)}

        </div>)
    }
}

export default HomePage_Popup