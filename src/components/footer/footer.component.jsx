import React from 'react';
import './footer.style.scss';
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const links = ['Men', 'Women', 'Kids', 'Mobile', 'Car'];
const listItem = links.map(link => (
  <li>{link}</li>

))
const Footer = () => (

  <div>
    <div className='footer-section'>
      <Container>
        <Row>
          <Col>
            <h3>Online Shopping</h3>
            <ul>
              <li><Link to='/shop/mens'>Men</Link></li>
              <li>Women</li>
              <li>Kids</li>
              <li>Electronics</li>
              <li>Mobile</li>
              <li>Home & Living</li>
            </ul>
          </Col>
          <Col><h3>UseFul Links</h3>
            <li>FAQ</li>
            <li>T&C</li>
            <li>Terms Of Ues </li>
            <li>Tracking Order</li>
            <li>Shipping</li>
            <li>Cancellation</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>return</li>
            <li>Blog</li>
          </Col>
          <Col>Expericence OnlineShop in Mobile </Col>
          <Col>
            <h3>User List</h3>
            <ul>{listItem}</ul>
          </Col>

        </Row>
      </Container>

    </div>
    <div className='footer-end'>
      <p>@ 2019 Copyroght techzone

      </p>
    </div>
  </div>
);

export default Footer;
