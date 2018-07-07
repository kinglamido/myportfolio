import React from 'react';
import './Experience.css'
import { Grid, Cell } from 'react-mdl';


class Experience extends React.Component {
  render() {
    return (
        <Grid>
            <Cell col={4}>
            <p>{this.props.startYear} - {this.props.endYear}</p>
            </Cell>
            <Cell col={8} className="education-right">
            <h3>{this.props.job}</h3>
            <h4>{this.props.place}</h4>            
            </Cell>
        </Grid>
    );
  }
}

export default Experience;