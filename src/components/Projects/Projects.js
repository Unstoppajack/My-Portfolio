import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import utask from '../../Assets/Projects/utask.jpg'
import web from '../../Assets/Projects/recipe.jpg'
  
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={utask}
              
              isBlog={false}  
              title="Utask"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={web}
              isBlog={false}
              title="Web"
              description="a web-based Recipe Sharing platform that allows users to share, discover, and save recipes. Users can create accounts, upload recipes with ingredients and instructions, search for recipes, and bookmark their favorites. Ensure an intuitive user interface, responsive design, and robust data storage.."
              
            />
          </Col>
    
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Coming Soon"
               
            />
          </Col>

         

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
