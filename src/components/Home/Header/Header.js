import React from 'react';
import classes from './Header.css';
import Aux from '../../../hoc/Wrapper';
import { Link} from 'react-router-dom';

const header = (props) => (

  <Aux>

    <div className={classes.appHeader}>
      <div className={classes.headerBar}>
        <a href="/" className={classes.brand}>
        <svg className={classes.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32"><circle cx="24" cy="24" r="24" fill="rgba(255,255,255,0.2)"/><circle cx="24" cy="24" r="22" fill="#1c202b" className="brand-color"/><circle cx="24" cy="24" r="10" fill="#ffffff"/><circle cx="13" cy="13" r="2" fill="#ffffff" className="brand-animate"/><path d="M 14 24 L 24 24 L 14 44 Z" fill="#FFFFFF"/><circle cx="24" cy="24" r="3" fill="#000000"/></svg>
          <span className={classes.span}>Hoyga Suganta</span>
        </a>

        <ul className={classes.pullRight, "pull-right"}>
            <Link to="/SingUp"><li className={classes.singUp}><span href="/" className={classes.singUpLink}>Signup</span></li></Link>
            <Link to="/SingIn"><li className={classes.singIn}><span  className={classes.singInLink}><span className={classes.singInButton}>Signin</span></span></li></Link>
        </ul>
      </div>




    </div>


  </Aux>

);

export default header;
