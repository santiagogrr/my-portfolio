import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Profile from '../assets/photo1.png'

class Landing extends Component {
  render(){
    return (
      <div className="landing-grid" style={{width: '100%', magin: 'auto'}}>
        <Grid >
          <Cell col={12}>
            <img
            src={Profile} 
            alt='profile'
            className="profile-image"
            />
            <div className="banner-text">
              <h1>Software Developer</h1>
              <hr/>
              <p>HTML/CSS | Javascript | React | React Native</p>

              <div className="social-links">
                
                {/* Linkedin */}
                <a href="https://www.linkedin.com/in/santiago-guerra-gzz/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin-square" aria-hidden="true"/>
                </a>

                {/* Github */}
                <a href="https://github.com/santiagogrr" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-github-square" aria-hidden="true"/>
                </a>

                {/* Twitter */}
                <a href="https://twitter.com/santiagogrr" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-twitter-square" aria-hidden="true"/>
                </a>

              </div>

            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;