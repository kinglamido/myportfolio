import React from 'react';
import { Tabs, Tab, Grid, Cell} from 'react-mdl';
import ReactProjects from '../Projects/ReactProjects';
import ReactNativeProjects from '../Projects/ReactNativeProjects';
import RubyProjects from '../Projects/RubyProjects';
import Androidprojects from '../Projects/Androidprojects';


class Project extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentTab: 0
    }
    this.setTab = this.setTab.bind(this)
  }
  
  setTab(tabId){
    this.setState({
      currentTab: tabId
    })
  }

  toggleTab() {
    if (this.state.currentTab === 0){
      return (   
        <ReactProjects/>
      )
    }
    else if (this.state.currentTab === 1){
      return (
        <ReactNativeProjects/>
      )
    }
    else if (this.state.currentTab === 2){
      return (
        <Androidprojects/>
      )
    }
    else if (this.state.currentTab === 3){
      return (
          <RubyProjects/>
      )
    }
  }

  render() {
    return (
      <div className='category-tab'>
      <Tabs currentTab={this.state.currentTab} onChange={this.setTab} ripple>
      <Tab >React.Js</Tab>
      <Tab >React Native</Tab>
      <Tab >Android app</Tab>
      <Tab>Ruby</Tab>
      </Tabs>
  
        <Grid>
        <Cell col={12}>
        <div>{this.toggleTab()}</div>
        </Cell>
        </Grid> 


      </div>
    );
  }
}

export default Project;