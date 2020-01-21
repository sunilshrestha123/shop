import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import './contact-us.style.scss';
import aboutus from '../../image/aboutus.jpg'
import Iframe from 'react-iframe'
class ContactUs extends React.Component {
    state = {
        first_name: '',
        middle_name: '',
        last_name: '',
        email: '',
        phone: '',
        address: '',
        message: ''
    }
    render() {
        const { first_name, middle_name, last_name, email, phone, address, message } = this.state;
        return (

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
                                        <Form.Control value={first_name} />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>Middle-Name</Form.Label>
                                        <Form.Control  value={middle_name}/>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>Last-Name</Form.Label>
                                        <Form.Control value={last_name}/>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" value={email} placeholder="name@example.com" />
                                </Form.Group>

                                <Form.Group controlId="formGridAddress1">
                                    <Form.Label>Phone No</Form.Label>
                                    <Form.Control value={phone} placeholder="Please add Mobile No" />
                                </Form.Group>
                                <Form.Group controlId="formGridAddress1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control value={address} placeholder="Please add Your address" />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control value={message} as="textarea" rows="2" />
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
        )
    }
}
export default ContactUs;
