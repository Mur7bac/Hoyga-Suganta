import React from 'react';
import classes from './Genres.css';
import Aux from '../../hoc/Wrapper';

const genre = (props) => (

  <Aux>

    <div className={classes.genreWrapper}>
      <div className={classes.cusub}>
        <div className={classes.cusubImage}>
          <div className={classes.cusubText}>
            <h3 className={classes.cusubHeader}>Heeso Cusub</h3>
            <p className={classes.cusubPraghref}>Get ready for high sound quality.</p>
            <a href="soon.html" className={classes.cusubLink}>Dhagayso</a>
          </div>
        </div>
      </div>


      <div className={classes.genreWrapper}>
        <div className={classes.cusub}>
          <div className={classes.qaramiImage}>
            <div className={classes.cusubText}>
              <h3 className={classes.cusubHeader}>Qaraami</h3>
              <p className={classes.cusubPraghref}>Listen to your favorite Old school songs.</p>
              <a href="soon.html" className={classes.cusubLink}>Dhagayso</a>
            </div>
          </div>
        </div>


      </div>


    </div>




  </Aux>

);

export default genre;
