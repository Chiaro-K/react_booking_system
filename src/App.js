import React, { Fragment } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home/home';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Fragment>
            <Switch>
              <Route exact path="/" render={() =>
                <Redirect to="/home"/>
              }/>
              <Route path="/home" component={Home}/>
              <Route component={Error}/>
            </Switch>
          </Fragment>
        </BrowserRouter>
      </div>
  );
}

export default App;
