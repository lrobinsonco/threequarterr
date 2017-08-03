import React, { Component } from 'react'
import { Jumbotron, Button, Grid } from 'react-bootstrap';
import '../App.css'

export default class AboutMe extends Component {
  render(){
    return(
      <div>

      <Jumbotron>
  <Grid>
    <h1>My Name is Lee</h1>
    <p>
      <Button
        bsStyle="success"
        bsSize="large"
        href="http://react-bootstrap.github.io/components.html"
        target="_blank">
        
      </Button>
    </p>
  </Grid>
</Jumbotron>
      </div>
    )
  }
}
