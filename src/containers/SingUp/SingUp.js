import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import classes from './SingUp.css';
import Logo from '../../components/SingIn/Logo/Logo';
import Body from '../../components/SingUp/Body/Body';


class SingUp extends Component {
  render() {
    return (

      <div className={classes.SingUp}>
        <Layout>
          <Logo />
          <Body />
        </Layout>
      </div>

    );
  }
}

export default SingUp;
