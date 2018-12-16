import React from 'react';
import classes from './Slider.css';
import Aux from '../../../hoc/Wrapper';
import { Button, Grid, Row,Col,Carousel,Caption,Item  } from 'react-bootstrap';
import {Link} from 'react-router-dom';
var Alert = require('react-bootstrap').Alert;
const slider = (props) => (

  <Aux>

    <div className={classes.sliderWrapper}>
      <div className="container">
        <div className="row-col">
          <div className="col-lg-12 text-center">
            <h2 className={classes.header1}>First Somali Music platform</h2>
            <h6 className={classes.header2}>Find old and new somali music</h6>
            <a  className={classes.link}>Start listening </a>
          </div>
        </div>
      </div>
    </div>




  </Aux>

);

export default slider;
