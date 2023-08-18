import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Jackman Osila Galiste </span>
            from <span className="purple"> Pangasinan,Philippines.</span>
            <br />  I am currently in my third year of college pursuing a Bachelor's degree in Information Technology <br />
            with a major in Website Development. 
            <br />
            <br />  
            Additionally, I am currently Studying at University of Pangasinan.
            <br />  
            I have a deep passion for crafting dynamic and engaging online experiences that seamlessly <br />blend creativity and functionality.
          </p>
          

        </blockquote>
      </Card.Body>
    </Card>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Unstoppajack"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              
            </ul>
          </Col>
        </Row>
        
      </Container>
    </Container>
  ); 
}
export default Home2;
