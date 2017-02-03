import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import 'bootstrap/dist/css/bootstrap.css';
import '../font-awesome-4.7.0/css/font-awesome.min.css';

import App from './App';
import Intro from './Components/Intro';
import Dashboard from './Components/Dashboard';
import Accounts from './Components/Accounts';
import SendRecieve from './Components/SendRecieve';
import Tools from './Components/Tools';
import Settings from './Components/Settings';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Intro}/>
      <Route path="/Dashboard"   component={Dashboard}/>
      <Route path="/Accounts"    component={Accounts}/>
      <Route path="/SendRecieve" component={SendRecieve}/>
      <Route path="/Tools"       component={Tools}/>
      <Route path="/Settings"    component={Settings}/>
    </Route>
    {/* add additional routes here */}
  </Router>,
  document.getElementById('root')
);
