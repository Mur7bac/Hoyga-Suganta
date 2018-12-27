import React, { Component } from 'react';
import classes from './Player.css';

class Player extends Component {
  render() {
    return (



          <div className={classes.Player}>
            <div className={classes.playlist}>
                <div className={classes.playerContainer}>
                    <div className={classes.mediaElement}>
                      <audio src="../Assets/music/Lucky You.mp3"></audio>
                    </div>
                </div>
            </div>
          </div>



    );
  }
}

export default Player;
