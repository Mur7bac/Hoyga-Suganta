import React, { Component } from 'react';
import classes from './Artist.css';
import Layout from '../../components/Layout/Layout';
import Content from '../../components/Home/Content/Content';
import Header from '../../components/Player/Header/Header';



class Artist extends Component {
  render() {
    return (


        <Layout>
          <Content>
            <div className={classes.Artist}>
              <Header />
            </div>
          </Content>
        </Layout>


    );
  }
}

export default Artist;
