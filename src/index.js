import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import { Switch, Route, Router } from 'react-router-dom';
import Home from './Components/Home/Home';
import EntryFormContainer from './Components/EntryForm/EntryFormContainer'
import Entry from './Components/Entry/Entry'
import SideBar from './Components/SideBar/SideBar';

ReactDOM.render((
  <BrowserRouter>
    <SideBar >
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/entryform' component={EntryFormContainer} />
        <Route path='/entry/:entryId' component={Entry} />
      </Switch>
   </SideBar>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
