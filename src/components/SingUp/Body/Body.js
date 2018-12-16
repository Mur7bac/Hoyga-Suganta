import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Body.css';
import Aux from '../../../hoc/Wrapper';

const divStyle = {
    padding: '2px 0 0 0'
};




const body = (props) => (

  <Aux>
    <div className={classes.bt}>
      <div className={classes.body}>
        <div className={classes.bodyWrapper}>
          <div className={classes.socialApi}>
            <a href="/" className={classes.facebook}>
              <i className="fab fa-facebook-f fa-lg pull-left" style={divStyle}></i>
              Sign up with Facebook
            </a>
            <a href="/" className={classes.google}>
              <i className="fab fab fa-google-plus-g fa-lg pull-left" style={divStyle}></i>
              Sign up with Google+
            </a>
          </div>
          <div className={classes.or}>OR</div>

          <form name="form" action="">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Username" required />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Password" required />
            </div>

            <div className={classes.terms}>
              <span className={classes.info}>By clicking Sign Up, I agree to the </span>
              <a href="/" className={classes.links}>Terms of service</a>
              <span className={classes.info}> and </span>
              <a href="/" className={classes.links}>Policy Privacy.</a>
            </div>
              <button type="submit" className={classes.SingInButton}>Sign up</button>
          </form>



          <div className={classes.doNotHave}>
            Allready have an account?
            <Link to="/SingIn"><a  className={classes.SingUp}>Sign ip</a></Link>
          </div>

        </div>
      </div>
    </div>
  </Aux>

);

export default body;
