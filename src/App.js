import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';

import Header from './components/Header';
import Splash from './components/Splash';
import Navigation from './components/Navigation';
import Detail from './components/Detail';
import Error from './components/Error';

import Websocket from './Websocket';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header/>
          <main>
            <Switch>
              <Route exact path="/" component={Splash}/>
              <Route exact path="/overview" component={Navigation}/>
                <Route path="/overview/:boat" component={Detail} />
              <Route component={Error}/>
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
}

export default App;
