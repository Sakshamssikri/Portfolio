import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Netflix.com"
              description="Netflix-like streaming application using Node.js, Express.js, React.js, and MongoDB. This application will include features such as user authentication, movie and TV show browsing, and personalized recommendations. The frontend will be built with React.js and Tailwind CSS for a dynamic user experience, and the backend will be powered by Node.js and Express.js to handle API requests and data management with MongoDB as the database."
              ghLink="https://github.com/Sakshamssikri/Netflix.com"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Expense Tracker"
              description="Expense tracker application using Node.js, Express.js, React.js, and MongoDB. This application will include features such as user authentication, expense categorization, budget tracking, detailed expense reports, and interactive graphs for visualizing spending patterns. The frontend will be built with React.js for a seamless user experience, while the backend will be powered by Node.js and Express.js to handle API requests and data management with MongoDB as the database."
              ghLink="https://github.com/Sakshamssikri/Expense-Tracker"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Topsis"
              description="TOPSIS-based text generation application using Python. This application will include features such as text input for criteria evaluation and the application of the TOPSIS method to generate ranked outputs. The backend will be developed in Python to handle the TOPSIS computations and data management."
              ghLink="https://github.com/Sakshamssikri/topsis_text_generation"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Pycaret"
              description="machine learning application using PyCaret. This application will include features such as data input for model training, automated machine learning model selection and tuning using PyCaret, and visualization of model performance. The backend will be developed in Python to handle the PyCaret processes and data management."
              ghLink="https://github.com/Sakshamssikri/pycaret"
             // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
