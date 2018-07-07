import React from 'react';
import { Card, CardText, CardTitle, CardActions, CardMenu, IconButton, Button } from 'react-mdl'

class RubyProjects extends React.Component {
  render() {
    return (
        <div className="projects-grid">
        <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png) center / cover'}}>Welcome</CardTitle>
        <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
        <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Codepen</Button>
            <Button colored>LiveDemo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>
    </Card>
    <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png) center / cover'}}>Welcome</CardTitle>
        <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
        <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Codepen</Button>
            <Button colored>LiveDemo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>
    </Card>
    <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png) center / cover'}}>Welcome</CardTitle>
        <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
        <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Codepen</Button>
            <Button colored>LiveDemo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>
    </Card>
    </div>
      )

  }
}

export default RubyProjects;