import React from 'react';
import classes from './Slider.css';
import Aux from '../../hoc/Wrapper';

const slider = (props) => (

  <Aux>

    <div className={classes.sliderWrapper} data-ui-jp="owlCarousel" data-ui-options="{
       items: 1
      ,loop: true
      ,autoplay: true
      ,nav: true
    }">




    </div>




  </Aux>

);

export default slider;
