import React from 'react';
import './Education.css'
import { Grid, Cell } from 'react-mdl';
class Education extends React.Component {
  render() {
    return (
        <Grid>
            <Cell col={4}>
            <p>{this.props.startYear} - {this.props.endYear}</p>
            </Cell>
            <Cell col={8} className="education-right">
            <h3>{this.props.certificate}</h3>
            <h4>{this.props.schoolName}</h4>            
            </Cell>
        </Grid>
    );
  }
}

export default Education;