import React from 'react';
import classes from './Banner.css';
import Aux from '../../hoc/Wrapper';

const genre = (props) => (

  <Aux>

    <div className={classes.bannerWrapper}>
      <div className={classes.leftCol}></div>
      <div className={classes.righCol}>
        <h3 className={classes.bannerHeader}>High quility, Amyzing artists, Always available</h3>
        <p className={classes.bannerPraghref}>Waxad ka helaysa dookhaga </p>
        <a href="home.html" className={classes.bannerLink}>Try Songs</a>

      </div>


      </div>






  </Aux>

);

export default genre;
