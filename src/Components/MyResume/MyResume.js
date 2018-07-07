import React from 'react';
import './MyResume.css'
import { Grid, Cell, } from 'react-mdl';
import lamido from '../Layouts/lamido.jpg';
import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import Skills from '../Skill/Skills'

class MyResume extends React.Component {
  render() {
    return (
    <Grid>
      <Cell col={4} className="resume-left">
      <div>
        <img src={lamido} alt="lamido"/>
      </div>
      <h2>Lamido Tijjani</h2>
      <h4>Programmer</h4>
      <hr/>
      <p>idgfigfwiwgifgetreraRTE8TRYEGGY8EWRTR8TGYGER87g7t7rd
        fghgyerfreurerg7ry8</p>
      <hr/>
      <h5>Address</h5>
      <p>Sabon gari B/kudu Jigawa State</p>
      <h5>Phone Number</h5>
      <p>+2348067446476</p>
      <h5>Website</h5>
      <p>www.shadow.com</p>

      </Cell>

      <Cell col={8} className="resume-right">
      <h2>Education</h2>
      <Education
      startYear={2001}
      endYear={2007}
      schoolName="Government Secondry School B/Kudu"
      certificate="Secondry School Certificate"
      />
      <Education
      startYear={2001}
      endYear={2007}
      schoolName="Government Secondry School B/Kudu"
      certificate="Secondry School Certificate"
      />
      <hr/>
      <h2>Experience</h2>
      <Experience
      startYear={2001}
      endYear={2007}
      job="Government Secondry School B/Kudu"
      place="Secondry School Certificate"
      />
       <h2>Skills</h2>
       <Skills
       skill="JavaSccript"
       progress={100}
       />
       <h2>Skills</h2>
       <Skills
       skill="Ruby on Rail"
       progress={80}
       />
      </Cell>
    </Grid>
    );
  }
}

export default MyResume;