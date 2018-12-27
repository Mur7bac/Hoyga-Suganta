import React, { Component } from 'react';
import classes from './Discover.css';
import Layout from '../../components/Layout/Layout';
import Content from '../../components/Home/Content/Content';
import Header from '../../components/Player/Header/Header';



class Discover extends Component {
  render() {
    return (


        <Layout>
          <Content>
            <div className={classes.Browse}>
              <Header />
            </div>
          </Content>
        </Layout>


    );
  }
}

export default Discover;
