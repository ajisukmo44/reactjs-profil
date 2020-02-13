import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import foto from './gambar/profil.png';
import node from './gambar/node-js.png';
import html from './gambar/html.png';
import css from './gambar/css.png';
import bootstrap from './gambar/bootstrap.png';
import php from './gambar/php.png';

class LandingPage extends Component {
render(){
return(
    <div style={{width:'100%', margin: 'auto'}}>
        <Grid className="landing-grid">
        <Cell col={12}>
        <img src={foto} className="avatar-img" alt="logo"/>
        <div  className="banner-text">
        <h2>Front End Web Developer</h2>
        <hr/>
        <div  className="social-links">
        <img src={html} className="icon" alt="logo"/>
        <img src={css} className="icon" alt="logo"/>
        <img src={bootstrap} className="icon" alt="logo"/>
        <img src={node} className="icon" alt="logo"/>
        <img src={php} className="icon2" alt="logo"/>
          
        </div>
        </div>
      
        </Cell>
        </Grid>
    
    </div>

    )
}
}

export default LandingPage;