import React, {Component} from 'react'
import {Switch,Route, withRouter} from 'react-router-dom'

import HomePage from './HomePage';

import {connect} from 'react-redux';



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loaded: true
    }
  }

 


  pages(){
    return (
       <Switch>
        <Route exact path="/home" component={HomePage} />
    </Switch>
    )
  }



  render(){
    return (
      
        <div>
          {this.state.loaded?this.pages():null}
         
        </div>
    )
  }
}

function mapStateToProps() {
  return { 
  }
}

export default withRouter(App)

//WITH REDUX
//export default withRouter(connect(mapStateToProps)(App));
