import React, { Component } from 'react'; 
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import foto from './gambar/js.jpg';


class Resume extends Component {
    render() {
      return(
        <div>
    <Grid className="contact-grid">
    <Cell className="contact-grid1" col={3}><h3>Aji Sukmo</h3>
    
    <hr style={{borderTop: '3px solid #007991', width: '100%'}}/>
    <img src={foto} alt="logo" style={{height: '300px', width: '250px', paddingTop:'2em'}}/>
    </Cell>

    <Cell col={4}>
    <h3> Contact Me</h3>
    
    <hr style={{borderTop: '3px solid #007991', width: '100%'}}/>
    <div className="contact-list">
    <List>
    <ListItem>
    <ListItemContent style={{fontSize:'19px', fontFamily: 'Anton'}}><a href='https://wa.me/6282147210076' style={{color:'black'}}><i className="fa fa-phone-square" aria-hidden="true"></i></a>082147210076 </ListItemContent></ListItem>
    <ListItem>
    <ListItemContent style={{fontSize:'18px', fontFamily: 'Anton'}}><i className="fa fa-envelope-square" aria-hidden="true"></i>ajisukmo44@gmail.com</ListItemContent></ListItem> 
    <ListItem>
    <ListItemContent style={{fontSize:'19px', fontFamily: 'Anton'}}><a href='https://web.facebook.com/aji.skmo' style={{color:'black'}}><i className="fa fa-facebook-square" aria-hidden="true"></i></a>Aji Sukmo</ListItemContent></ListItem>   
    <ListItem>
    <ListItemContent style={{fontSize:'19px', fontFamily: 'Anton'}}><a href='https://github.com/ajisukmo44' style={{color:'black'}}><i className="fa fa-github-square" aria-hidden="true"></i></a>ajisukmo44</ListItemContent></ListItem>
    <ListItem>
    <ListItemContent style={{fontSize:'15x', fontFamily: 'Anton'}}><a href='https://ajisukmo44.blogspot.com/' style={{color:'black'}}><i className="fa fa-rss-square" aria-hidden="true"></i></a>ajisukmo44.blogspot.com</ListItemContent>
    </ListItem>
        </List>
        </div>
            </Cell>
            </Grid>
        </div>
      )
    }
  }
  
  export default Resume;