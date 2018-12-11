import React, { Component } from 'react';
import Layout from '../../components/Home/Layout/Layout';
import Content from '../../components/Home/Content/Content';
import Header from '../../components/Home/Header/Header';
import Body from '../../components/Home/Body/Body';
import Slider from '../../components/Home/Slider/Slider';
import Genres from '../../components/Home/Genres/Genres';
import Banner from '../../components/Home/Banner/Banner';
import Quotes from '../../components/Home/Quotes/Quotes';
import Footer from '../../components/Home/Footer/Footer';


class Home extends Component {
  render() {
    return (

      <div className="Murabac">
        <Layout>
          <Content>
            <Header />
            <Body>
              <Slider />
              <Genres />
              <Banner />
              <Quotes />
            </Body>
            <Footer />
          </Content>
        </Layout>
      </div>

    );
  }
}

export default Home;
