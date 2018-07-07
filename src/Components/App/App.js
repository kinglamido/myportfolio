import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from '../Main/Main';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title={<Link className="myport" to="/">My Portfolio</Link>} scroll>
              <Navigation>
                  <Link to="/Project">Project</Link>
                  <Link to="/Resume">Resume</Link>
                  <Link to="/AboutMe">AboutMe</Link>
                  <Link to="/Contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
                  <Link to="/Project">Project</Link>
                  <Link to="/Resume">Resume</Link>
                  <Link to="/AboutMe">AboutMe</Link>
                  <Link to="/Contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
  </div>
    );
  }
}

export default App;
