import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Error.css';
import Aux from '../../hoc/Wrapper';


const linkStyle = {
  textDecoration: 'none'
};

const body = (props) => (

  <Aux>
    <div className={classes.oopss}>
      <div className={classes.errorText}>
      <span>404</span>
      <p>PAGE NOT FOUND</p>
      <Link to="/" style={linkStyle}>
        <p className={classes.hmpg}><a href='#' className={classes.back}>Back To Home</a></p>
      </Link>
      </div>
    </div>
  </Aux>

);

export default body;
