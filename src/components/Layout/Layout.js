import React from 'react';
import classes from './Layout.css';
import Aux from '../../hoc/Wrapper';

const layout = (props) => (

  <Aux>
    <div className={classes.app, classes.dk}>
  {props.children}


    </div>


  </Aux>

);

export default layout;
