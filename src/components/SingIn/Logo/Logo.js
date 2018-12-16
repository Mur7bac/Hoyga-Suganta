import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Logo.css';
import Aux from '../../../hoc/Wrapper';

const logo = (props) => (

  <Aux>
    <div className={classes.padding}>
        <div className={classes.navbar}>
            <div className={classes.pullCenter}>
            <Link to="/">
            <span className={classes.brand}>
             <img src="./logo.png" alt="." className={classes.brandImage} />
              <span className="hidden-folded inline">Hoyga Suganta</span></span></Link>
            </div>
        </div>
    </div>
  </Aux>

);

export default logo;
