import React, { Component } from 'react';
import classes from './forgotPassword.css';
import Layout from '../../components/Layout/Layout';
import Logo from '../../components/SingIn/Logo/Logo';
import Body from '../../components/Forgot/Body/Body';


class ForgotPassword extends Component {
  render() {
    return (


        <Layout>
          <div className={classes.Forgot}>
            <Logo />
            <Body />
          </div>
        </Layout>


    );
  }
}

export default ForgotPassword;
