import React from "react";
import Phinma from '../Assets/Phinma.png'
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
       
        <Col md="4" className="footer-copywright">
        <img
                src={Phinma}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "100px" }}      
              />
              
          <h2>Phinma University of Pangasinan</h2>
          <h6>College of Information Technology</h6>
        </Col>
      
      </Row>
    </Container>
  );
}

export default Footer;
