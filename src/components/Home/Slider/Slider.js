import React from 'react';
import classes from './Slider.css';
import Aux from '../../../hoc/Wrapper';
import {Link} from 'react-router-dom';

const linkStyle = {
  textDecoration: 'none'
};

const slider = (props) => (


  <Aux>

    <div className={classes.sliderWrapper}>
      <div className="container">
        <div className="row-col">
          <div className="col-lg-12 text-center">
            <h2 className={classes.header1}>First Somali Music platform</h2>
            <h6 className={classes.header2}>Find old and new somali music</h6>
            <Link to="/Browse" style={linkStyle}><span  className={classes.link}>Start listening </span></Link>
          </div>
        </div>
      </div>
    </div>




  </Aux>

);

export default slider;
