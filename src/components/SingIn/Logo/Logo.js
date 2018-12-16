import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import classes from './Logo.css';
import Aux from '../../../hoc/Wrapper';

const logo = (props) => (

  <Aux>
    <div className={classes.padding}>
        <div className={classes.navbar}>
            <div className={classes.pullCenter}>
            <Link to="/">
            <a  className={classes.brand}>
             <img src="./logo.png" alt="." className={classes.brandImage} />
              <span className="hidden-folded inline">Hoyga Suganta</span></a></Link>
            </div>
        </div>
    </div>
  </Aux>

);

export default logo;
