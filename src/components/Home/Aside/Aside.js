import React from 'react';
import classes from './Aside.css';
import Aux from '../../../hoc/Wrapper';

const aside = (props) => (

  <Aux>
    <div className={classes.app, classes.dk}>



    </div>

    <main>
      {props.children}
    </main>
  </Aux>

);

export default aside;
