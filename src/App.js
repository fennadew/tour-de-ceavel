import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header'
import Splash from './components/Splash'
import Navigation from './components/Navigation'
import Detail from './components/Detail'

import Websocket from './Websocket';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header/>
          <main>
            <Route exact path="/" component={Splash}/>
            <Route exact path="/overview" component={Navigation}/>
            <Route exact path="/detail" component={Detail}/>
          </main>
        </div>
      </Router>
    )
  }
}

export default App;
