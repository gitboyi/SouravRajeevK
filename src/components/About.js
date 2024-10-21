import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 3rem;
  background-color: #fff;
  color: #333;
`;

const About = () => {
  return (
    <AboutSection>
      <h2>About Me</h2>
      <p>Hi, I'm Sourav Rajeev K, a passionate developer with experience in building beautiful web applications.</p>
    </AboutSection>
  );
};

export default About;
