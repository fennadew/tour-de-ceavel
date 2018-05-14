import React from 'react';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';

import Header from './components/Header';
import Info from './components/Info';
import Navigation from './components/Navigation';
import Detail from './components/Detail';
import Error from './components/Error';
import Map from './components/map';
import Splash from './components/Splash';

import Websocket from './Websocket';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header/>
                <main>
                    <Switch>
                        <Route exact path="/" component={Info}/>
                        <Route exact path="/info" component={Info}/>
                        <Route exact path="/overview" component={Navigation}/>
                        <Route path="/overview/:boat" component={Detail}/>
                        <Route path="/detail" component={Detail}/>
                        <Route path="/map" component={Map}/>
                        <Route component={Error}/>
                    </Switch>
                </main>
            </div>
        </Router>
    )
};


export default App;
