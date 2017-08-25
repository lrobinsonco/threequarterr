import React, {Component} from 'react';
import {Row, Col, Grid, Thumbnail} from 'react-bootstrap';

import '../App.css'

export default class Projects extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={6} md={3}>
              <Thumbnail href="#" alt="171x180" src="/assets/thumbnail.png"/>
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail href="#" alt="171x180" src="/assets/thumbnail.png"/>
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail href="#" alt="171x180" src="/assets/thumbnail.png"/>
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail href="#" alt="171x180" src="/assets/thumbnail.png"/>
            </Col>
          </Row>
        </Grid>
      </div>

    )
  }
}
