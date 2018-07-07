import React from 'react';
import {Grid, Cell } from 'react-mdl';
import lamido from './lamido.jpg'


class LandingPage extends React.Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
      <Grid className="landing-grid">
      <Cell col={12}>
      <img src={lamido}
      alt="avatar"
      className='avatar-img'/>
      <div className="banner-text">
      <h1>Full Stack Web Developer</h1>
      <hr/>
      <p>HTML/CSS | JavaScript | Java | Ruby on Rail | React | React Native | Android | Express | Node.js | Git | CLI</p>
      
      <div className="social-links">
      <a href="http://github.com" rel="noopener noreferrer" target="_blank">
      <i className="fa fa-github-square" aria-hidden="true"/>
      </a>
      <a href="http://github.com" rel="noopener noreferrer" target="_blank">
      <i className="fa fa-linkedin-square" aria-hidden="true"/>
      </a>
      <a href="http://github.com" rel="noopener noreferrer" target="_blank">
      <i className="fa fa-free-code-camp" aria-hidden="true"/>
      </a>
      <a href="http://github.com" rel="noopener noreferrer" target="_blank">
      <i className="fa fa-free-code-camp" aria-hidden="true"/>
      </a>
      </div>

      </div>
      
      </Cell>
      </Grid>
      </div>
    );
  }
}

export default LandingPage;