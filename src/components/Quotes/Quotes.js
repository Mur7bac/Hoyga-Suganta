import React from 'react';
import classes from './Quotes.css';
import Aux from '../../hoc/Wrapper';

const quotes = (props) => (

  <Aux>

    <div className={classes.quotesWrapper} >

      <div className={classes.odhaahyo}>
        <div className={classes.odhaah}>
          <div className={classes.odhaahWrapper}>
            <h4 className={classes.odhaahHeader}>Giddigood adoomaha waxaa gaadhay nabar wayne Abaar gaag ma reebaa dhacdiyo gaatamoo kale.</h4>
            <p className={classes.odhaahPraghraf}>Ismaaciil mire gabaygii ” Guuguule”</p>
          </div>
        </div>

        <div className={classes.odhaah}>
          <div className={classes.odhaahWrapper}>
            <h4 className={classes.odhaahHeader}>Kolkaad adigu dheregtaa, Dhibaatadu i daysaa  Dheehaaga wacan baan Aniguna ku dheeshta.</h4>
            <p className={classes.odhaahPraghraf}>SAADO CALI WARSAME.</p>
          </div>
        </div>

        <div className={classes.odhaah}>
          <div className={classes.odhaahWrapper}>
            <h4 className={classes.odhaahHeader}>Hadii aanay dabeel hurin awood maleh nafteyduye markaan uurka hooyadeey ifka uuga soo baxay anigoona anfaco baran.</h4>
            <p className={classes.odhaahPraghraf}>maxamad cali maxamad (ilkacase).</p>
          </div>
        </div>

      </div>


    </div>






  </Aux>

);

export default quotes;
