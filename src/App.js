import React, { Component } from 'react';
import Home from './containers/Home/Home';
import SingIn from './containers/SingIn/SingIn';
import SingUp from './containers/SingUp/SingUp';
import ForgotPassword from './containers/forgotPassword/forgotPassword';
import Browse from './containers/Browse/Browse';
import Discover from './containers/Discover/Discover';
import Artist from './containers/Artist/Artist';
import Error from './components/Error/Error';
import {BrowserRouter, Route, Switch} from 'react-router-dom';



class App extends Component {
  render() {
    return (

      <BrowserRouter>

        <Switch>

          <Route path="/" component={Home} exact />
          <Route path="/SingIn" component={SingIn} />
          <Route path="/SingUp" component={SingUp} />
          <Route path="/forgotPassword" component={ForgotPassword} />
          <Route path="/Discover" component={Discover} />
          <Route path="/Browse" component={Browse} />
          <Route path="/Artist" component={Artist} />
          <Route  component={Error}/>

        </Switch>

      </BrowserRouter>

    );
  }
}

export default App;
