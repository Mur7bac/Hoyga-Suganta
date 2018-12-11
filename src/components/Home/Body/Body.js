import React from 'react';
import classes from './Body.css';
import Aux from '../../../hoc/Wrapper';

const body = (props) => (

  <Aux>
    <div className={classes.appBody}>

{props.children}

    </div>


  </Aux>

);

export default body;
