import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Body.css';
import Aux from '../../../hoc/Wrapper';


const inputStyle = {
  padding: '18px'
};

const body = (props) => (

  <Aux>
    <div className={classes.bt}>
      <div className={classes.body}>
        <div className={classes.bodyWrapper}>
          <div>
            <h4 className={classes.header}>Forgot your password?</h4>
            <p className={classes.text}>Enter your email below and we will send you instructions on how to change your password.</p>
          </div>

          <form name="reset">
            <div className="form-group">
              <input type="email" placeholder="Email" className="form-control" style={inputStyle} required />
            </div>
            <button type="submit" className={classes.send}>Send</button>
          </form>

          <div className={classes.back}>

            Return to <Link to="/SingIn"><a  className={classes.SingIn}>Sign in</a></Link>
          </div>

        </div>
      </div>
    </div>
  </Aux>

);

export default body;
