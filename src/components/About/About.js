import React from 'react';
import Particle from "../Particle";
import {Accordion, Container} from 'react-bootstrap';



function About() {
  return (
    <Container className='p-5 '>
       <Particle />
      <h2 className='display-1 fw-bold text-center text-light'>My Education</h2>
      <p className='text-center text-light'>These are my academic qualifications:</p>
      <hr/>
      <Container className='p-5'> 
      <Accordion defaultActiveKey="0" >  
      <Accordion.Item eventKey="0" style={{backgroundColor:'black', color:'white'}}>
        <Accordion.Header >School 1 | Year 2015</Accordion.Header>
        <Accordion.Body style={{background: 'black'}}>
        Payas elementary school, Sta.Barbara Pangasinan    
        </Accordion.Body>
      </Accordion.Item >
      <Accordion.Item eventKey="1" style={{backgroundColor:'black', color:'white'}}>
        <Accordion.Header>School 2 | Year 2019</Accordion.Header>
        <Accordion.Body>
        Daniel maramba national highschool, Poblacion norte sta barbara   
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" style={{backgroundColor:'black', color:'white'}}>  
        <Accordion.Header>School 3 | Current</Accordion.Header>
        <Accordion.Body>
        Phinma Upang Dagupan, Arellano st Dagupan
        </Accordion.Body>
        
      </Accordion.Item>
    </Accordion>
      </Container>
    </Container>
  );
}

export default About;
