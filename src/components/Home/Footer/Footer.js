import React from 'react';
import classes from './Footer.css';
import classes2 from '../Header/Header.css';
import Aux from '../../../hoc/Wrapper';

const footer = (props) => (

  <Aux>

    <div className={classes.footerWrapper} >
      <div className={classes.innerWrapper}>
        <div className={classes.footer}>
          <div className={classes.contact}>

            <div className={classes.footerLogo}>
              <a href="/" className={classes2.brand}>
                <svg className={classes2.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32"><circle cx="24" cy="24" r="24" fill="rgba(255,255,255,0.2)"/><circle cx="24" cy="24" r="22" fill="#1c202b" className="brand-color"/><circle cx="24" cy="24" r="10" fill="#ffffff"/><circle cx="13" cy="13" r="2" fill="#ffffff" className="brand-animate"/><path d="M 14 24 L 24 24 L 14 44 Z" fill="#FFFFFF"/><circle cx="24" cy="24" r="3" fill="#000000"/></svg>
                <span className={classes.span}>Hoyga Suganta</span>
              </a>
            </div>

            <div className={classes.social}>
              <h6 className={classes.socailHeader}>Connect</h6>
              <div className={classes.socailLinks}>
                <ul className={classes.socailLinksList}>
                    <li className={classes.socailLink}><a href="/">Facebook</a></li>
                    <li className={classes.socailLink}><a href="/">Twitter</a></li>
                    <li className={classes.socailLink}><a href="/">Google+</a></li>
                </ul>
              </div>
            </div>


            <div className={classes.newsLetter}>
              <h6 className={classes.newsLetterHeader}>Subscribe</h6>
              <p>Do not want to miss our newsletter?</p>
              <form className={classes.form}>
                <input type="text" className={classes.formInput} placeholder="Your email" />
                <button type="submit" className={classes.formButton}>Subscribe</button>
              </form>
            </div>
          </div>
        </div>

      </div>


    </div>






  </Aux>

);

export default footer;
