import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
    render(){
    return(
    <Grid>
   <Cell col={3}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={9}>
          <p style={{marginTop:'0px'}}>{this.props.UnivName} ( {this.props.UnivJur} )</p>
        
        </Cell>
    </Grid>
    
        )
    }
    }
    
    export default Education;
