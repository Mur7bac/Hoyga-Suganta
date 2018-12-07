import React from 'react';
import classes from './Content.css';
import Aux from '../../hoc/Wrapper';

const content = (props) => (

  <Aux>
    <div className={classes.appContent} role="main">

{props.children}

    </div>


  </Aux>

);

export default content;
