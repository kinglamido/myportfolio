import React from 'react';
import './Skills.css'
import { Grid, Cell, ProgressBar} from 'react-mdl';


class Skills extends React.Component {
  render() {
    return (
        <Grid>
            <Cell col={12} className="skill-progress">
            <div>
              {this.props.skill}
              <ProgressBar className="progress" progress={this.props.progress}/>
            </div>
            </Cell>

        </Grid>
    );
  }
}

export default Skills;