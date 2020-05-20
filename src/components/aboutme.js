import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

class AboutMe extends Component {
  render(){
    return (
      <Container className="about-body">
        <Row>
          <Col align='center'>
            <h1>Let's know each other</h1>
          </Col>
        </Row>
        <Row>
          <Col>
          <p>Hello, my name is Santiago. I'm a full stack engineer with experience in React, React Native, Python, Oracle SQL and MongoDB.</p>

          <p>My dream is to one day start my own business and become an entrepreneur (currently working on some ideas).</p>

          <p>I'm constantly learning new things. currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS</p>

          </Col>
        </Row>

      </Container>
    );
  }
}

export default AboutMe;
