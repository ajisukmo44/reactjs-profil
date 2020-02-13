import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
    render(){
    return(
  <Grid>
   <Cell col={3}>
          <p>{this.props.startYear}</p>
        </Cell>
        <Cell col={9}>
          <p style={{marginTop:'0px'}}>{this.props.DName}</p>
        
        </Cell>
    </Grid>
    
    )
    }
    }
    
    export default Experience;
