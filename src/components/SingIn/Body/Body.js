import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Body.css';
import Aux from '../../../hoc/Wrapper';

const divStyle = {
    padding: '2px 0 0 0'
};

const inputStyle = {
  fontFamily:  'Roboto',
  fontSize: '16px',
  fontWeight: '400',
  color: '#55595c'
};



const body = (props) => (

  <Aux>
    <div className={classes.bt}>
      <div className={classes.body}>
        <div className={classes.bodyWrapper}>
          <div className={classes.socialApi}>
            <a href="/" className={classes.facebook}>
              <i className="fab fa-facebook-f fa-lg pull-left" style={divStyle}></i>
              Sign in with Facebook
            </a>
            <a href="/" className={classes.google}>
              <i className="fab fab fa-google-plus-g fa-lg pull-left" style={divStyle}></i>
              Sign in with Google+
            </a>
          </div>
          <div className={classes.or}>OR</div>

          <form name="form" action="">
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Email" required style={inputStyle}/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="password" required style={inputStyle}/>
            </div>
            <div className={classes.checkbox}>
              <label className={classes.checkboxLabel}>
                <input type="checkbox" className={classes.checkboxInput}/>
                <i className="primary"></i> Keep me signed in
              </label>
            </div>
            <button type="submit" className={classes.SingInButton}>Sign in</button>
          </form>
          <Link to="/forgotPassword">
          <div className={classes.forgot}>
            <a className={classes.forgotLink}>Forgot password?</a>
          </div>
          </Link>
          <div className={classes.doNotHave}>
            Do not have an account?
            <Link to="/SingUp"><a href="signup.html" className={classes.SingUp}>Sign up</a></Link>
          </div>

        </div>
      </div>
    </div>
  </Aux>

);

export default body;
