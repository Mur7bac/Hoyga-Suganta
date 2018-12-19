import React, { Component } from 'react';
import classes from './Browse.css';
import Layout from '../../components/Layout/Layout';
import Content from '../../components/Home/Content/Content';
import Header from '../../components/Browse/Header/Header';



class Browse extends Component {
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

export default Browse;
