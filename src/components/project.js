import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tabs,Tab, Card,CardText, Button, CardTitle, IconButton, CardMenu, CardActions, Grid, Cell } from 'react-mdl';
import foto from './gambar/f1.jpg';
import kopi from './gambar/004.png';
import jk from './gambar/konfeksi.png';
import profil from './gambar/profil.jpg';

class Projects extends Component {
    constructor(props) {
      super(props);
      this.state = { activeTab: 0 };
    }
  
    toggleCategories() {
  
      if(this.state.activeTab === 0){
        return(
         
            <div className="projects-grid" >
            {/* Project 1 */}        
            <Card shadow={5} style={{minWidth: '312', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background:`url(${foto}) center / cover`}}>PAKET WISATA </CardTitle>
            <CardText>
            Sistem Informasi Pemesanan Paket Wisata Berbasis Web dengan PHP, Mysql dan Bootstrap 4.
            </CardText>
            <CardActions  border>
            <a href="https://github.com/ajisukmo44/Sistem-Informasi-Pemesanan-Paket-Wisata-Berbasis-Web" taget="_blank" rel="nooppener noreferrer">
            <Button colored>Git Hub</Button> </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
            </CardMenu>
            </Card> 
         

             {/* Project 2 */}        
             <Card shadow={5} style={{minWidth: '312', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background:`url(${kopi}) center / cover`}}>PEMESANAN KOPI </CardTitle>
            <CardText>
            Sistem Informasi Pemesanan Kopi Berbasis Web dengan PHP, Rajaongkir, Mysql dan Bootstrap.
            </CardText>
            <CardActions border>
                
            <a href="https://github.com/ajisukmo44/Sistem-Informasi-Pemesanan-Kopi-berbasis-Web">
            <Button colored>Git Hub</Button> </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
            </CardMenu>
            </Card> 

            
             {/* Project 3 */}        
             <Card shadow={5} style={{minWidth: '312', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background:`url(${jk}) center / cover`}}>KONFEKSI BAJU</CardTitle>
            <CardText>
            Website Portofolio Front End Pemesanan Baju Konfeksi dengan PHP + Bootstrap.
            </CardText>
            <CardActions border>
            <a href="https://github.com/ajisukmo44/Portofolio_webjogjakonfeksi" taget="_blank" rel="nooppener noreferrer">
            <Button colored>Git Hub</Button> </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
            </CardMenu>
            </Card>
    </div>
  
        )
      } else if(this.state.activeTab === 1) {
        return (
          <div></div>
        )
      } else if(this.state.activeTab === 2) {
        return (
            <div className="projects-grid" >
            {/* Project 1 */}        
            <Card shadow={5} style={{minWidth: '312', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background:`url(${profil}) center / cover`}}>PERSONAL PROFIL</CardTitle>
            <CardText>
            Membuat website simpel dengan react js untuk personal branding dan menampilkan portofolio yang kita miliki.
            </CardText>
            <CardActions  border>
            <a href="https://github.com/ajisukmo44/Sistem-Informasi-Pemesanan-Paket-Wisata-Berbasis-Web" taget="_blank" rel="nooppener noreferrer">
            <Button colored>Git Hub</Button> </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
            </CardMenu>
            </Card> 
         
  </div>
        )
      } else if(this.state.activeTab === 3) {
        return (
          <div><h1></h1></div>
        )
      }
  
    }
  
  
  
    render() {
      return(
        <div>
          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
           
            <Tab>PHP</Tab>
            <Tab>CodeIgniter</Tab>
            <Tab>React JS</Tab>
            <Tab>Vue JS</Tab>
          </Tabs>
  
  
            <Grid>
              <Cell col={12}>
                <div className="content">{this.toggleCategories()}</div>
              </Cell>
            </Grid>
  
  
        </div>
      )
    }
  }
  
  export default Projects;





