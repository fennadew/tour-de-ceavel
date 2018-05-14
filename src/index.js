import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.min.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
registerServiceWorker();
