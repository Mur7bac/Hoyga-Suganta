import React, { Component } from 'react';
import Home from './containers/Home/Home';
import Error from './components/Error/Error';
import {BrowserRouter, Route, Switch} from 'react-router-dom';



class App extends Component {
  render() {
    return (

      <BrowserRouter>

        <Switch>

          <Route path="/" component={Home} exact />
          <Route  component={Error}/>

        </Switch>

      </BrowserRouter>

    );
  }
}

export default App;
