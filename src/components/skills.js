import React, { Component } from 'react';
import { Grid, Cell,ProgressBar } from 'react-mdl';

class Skills extends Component {
    render() {
      return(
    <Grid>
      <Cell col={3}>
          <p style={{display: 'flex'}}>{this.props.skill}</p>
        </Cell>
        <Cell col={9}>
        <p><ProgressBar  progress={this.props.progress}/> </p>
        </Cell>
            
        </Grid>
      )
    }
  }
  
  export default Skills;
