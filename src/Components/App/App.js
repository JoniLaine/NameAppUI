import React from 'react';
import './App.css';

import NamePage from '../Name/Name';
import NameFormPage from '../NameFormPage/NameForm';
import TotalPage from '../TotalPage/Total';
import AlphabeticalPage from '../Alphabetical/Alphabetical'
import PopularFirstPage from '../PopularFirstPage/PopularFirst'

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";


const App = () => {
 
  //returns all routes to pages
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
