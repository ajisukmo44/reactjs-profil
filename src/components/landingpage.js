import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import foto from './profil.png';
class LandingPage extends Component {
render(){
return(
    <div style={{width:'100%', margin: 'auto'}}>
        <Grid className="landing-grid">
        <Cell col={12}>
        <img src={foto} className="avatar-img" alt="logo"/>
        <div  className="banner-text">
        <h1>Freelance Web Developer</h1>
        <hr/>

        <p>HTML 5 | CSS 3 | Bootstrap 4 | NodeJs | PHP 7 | Mysql</p>
        <div  className="social-links">
            <a href="#" taget="_blank" rel="nooppener noreferrer">
                <i className="fa fa-facebook-square" aria-hidden="true"/>
            </a>
            <a href="#" taget="_blank" rel="nooppener noreferrer">
                <i className="fa fa-twitter-square" aria-hidden="true"/>
            </a>
            <a href="https://github.com/ajisukmo44" taget="_blank" rel="nooppener noreferrer">
                <i className="fa fa-github-square" aria-hidden="true"/>
            </a>
            <a href="#" taget="_blank" rel="nooppener noreferrer">
                <i className="fa fa-youtube-square" aria-hidden="true"/>
            </a>
        </div>
        </div>
      
        </Cell>
        </Grid>
    
    </div>

    )
}
}

export default LandingPage;