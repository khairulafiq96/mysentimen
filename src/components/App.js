import React, {Component} from 'react'
import {Switch,Route, withRouter} from 'react-router-dom'

import HomePage from './HomePage';
import Header from './Header';

import {connect} from 'react-redux';
import Footer from './Footer';



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loaded: true
    }
  }

 


  pages(){
    return (
      <div>
        <Header></Header>
        <div className='homeBackground'>
          <Switch>
            <Route exact path="/home" component={HomePage} />
          </Switch>
        </div> 
        <Footer></Footer>
      </div>
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
