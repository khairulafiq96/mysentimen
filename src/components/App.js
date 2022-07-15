import React, {Component} from 'react'
import {Switch,Route, withRouter} from 'react-router-dom'

import HomePage from './HomePage';
import Header from './Header';

import {connect} from 'react-redux';
import Footer from './Footer';
import Charts from './Charts';
import Politicians from './Politicians';



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loaded: true
    }
  }

 


  pages(){
    return (
      <div className='body-for-sticky'>
        <Header></Header>
        <div className='homeBackground'>
          <Switch>
            <Route exact path={["/","/home"]} component={HomePage}/>
            <Route exact path="/charts" component={Charts}/>
            <Route exact path="/politicians/:politician_id" component={Politicians}/>
          </Switch>
          <Footer className="footer sticky-footer"></Footer>
        </div> 
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

function mapStateToProps({users}) {
  return {
    users
  }
}

//export default withRouter(App)

//WITH REDUX
export default withRouter(connect(mapStateToProps)(App));
