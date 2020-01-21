import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import './contact-us.style.scss';
import aboutus from '../../image/aboutus.jpg'
import Iframe from 'react-iframe'
const ContactUs = () => (
  <div className='contact-us'>

    <img className="image" src={aboutus} alt="Conact-us" />
    <Container>
      <Row>
        <Col xs={6}>
          <h3>Contact-Us</h3>
          <Form>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>First-Name</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Middle-Name</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Last-Name</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Phone No</Form.Label>
              <Form.Control placeholder="Please add Mobile No" />
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="Please add Your address" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows="2" />
            </Form.Group>
            <Button variant="success">Submit</Button>

          </Form>

        </Col>
        <Col xs={6}>
          <h3>Map-Location</h3>
          <div className="map">
            <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d444.7245376364699!2d87.9275377742651!3d26.909959111755246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x41db936612482572!2silam%20fashion%20collection!5e0!3m2!1sen!2snp!4v1577861726656!5m2!1sen!2snp" width="500" height="450" frameborder="0" style="border:0;" allowfullscreen=""></Iframe>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);
export default ContactUs;
