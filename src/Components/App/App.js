import React from 'react';
//import React, { Component } from 'react';
import './App.css';

import NamePage from '../Name/NamePage';
import NameFormPage from '../NameFormPage/NameFormPage';
import TotalPage from '../TotalPage/TotalPage';
import AlphabeticalPage from '../Alphabetical/AlphabeticalPage'
import PopularFirstPage from '../PopularFirstPage/PopularFirstPage'

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";


const App = () => {
 
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
        <Route path="/" component={NamePage} exact={true} />
          <Route path="/NamePage" component={NamePage} />
          <Route path="/NameFormPage" component={NameFormPage} />
          <Route path="/TotalPage" component={TotalPage} />
          <Route path="/PopularFirstPage" component={PopularFirstPage} />
          <Route path="/AlphabeticalPage" component={AlphabeticalPage} />
          <Route path="/Name" component={NamePage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
