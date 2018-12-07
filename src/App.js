import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Slider from './components/Slider/Slider';
import Genres from './components/Genres/Genres';
import Banner from './components/Banner/Banner';
import Quotes from './components/Quotes/Quotes';
import Footer from './components/Footer/Footer';



class App extends Component {
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

export default App;
