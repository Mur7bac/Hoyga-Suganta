import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import classes from './Header.css';
import Aux from '../../../hoc/Wrapper';

const linkStyle = {
  textDecoration: 'none'
}

const navItemStyle = {
  paddingLeft: '24px'
}
const navLink= {
  display: 'block',
  lineHeight: '56px',
  position: 'relative',
  textAlign: 'center'
}
const header = (props) => (

  <Aux>

    <div className={classes.browseHeader}>
        <div className={classes.navbar}>
          <Link to="/" style={linkStyle}>
            <a href="index.html" className={classes.brand}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32" className={classes.svg}>
              <circle cx="24" cy="24" r="24" fill="rgba(255,255,255,0.2)"/>
              <circle cx="24" cy="24" r="22" fill="#1c202b" className="brand-color"/>
              <circle cx="24" cy="24" r="10" fill="#ffffff"/>
              <circle cx="13" cy="13" r="2" fill="#ffffff" className="brand-animate"/>
              <path d="M 14 24 L 24 24 L 14 44 Z" fill="#FFFFFF"/>
              <circle cx="24" cy="24" r="3" fill="#000000"/>
              </svg> <img src="images/logo.png" alt="." className="hide" />
            <span className={classes.span}>Hoyga Suuganta</span>
            </a>
          </Link>

          <ul className={classes.navLinks}>
            <li className={classes.navItem} ><NavLink to="/Discover" style={navLink}><span className={classes.navText}>Discover</span></NavLink></li>
            <li className={classes.navItem} style={navItemStyle}><NavLink to="/Browse" style={navLink} ><span className={classes.navText}>Browse</span></NavLink></li>
            <li className={classes.navItem} style={navItemStyle}><NavLink to="/Artist" style={navLink}><span className={classes.navText}>Artists</span></NavLink></li>
          </ul>
        </div>


    </div>
  </Aux>

);

export default header;
