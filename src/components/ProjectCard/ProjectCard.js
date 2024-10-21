import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 300px; /* Fixed width */
  height: 200px; /* Fixed height */
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-image: url(${props => props.backgroundImage});
  background-size: cover; /* Cover the entire card */
  background-position: center; /* Center the image */
  display: flex;
  flex-direction: column; /* Arrange items vertically */
  justify-content: flex-end; /* Align content to the bottom */
  color: white; /* Change text color to white */
`;

const Content = styled.div`
  background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent background for text */
  padding: 1rem; /* Padding around the text */
`;

const Title = styled.h3`
  margin: 0;
  color: #fff; /* White color for title */
`;

const Description = styled.p`
  margin: 0;
  color: #ddd; /* Lighter shade for description */
`;

const LiveLink = styled.a`
  color: #fff; /* White color for link */
  text-decoration: underline;
  margin-top: 0.5rem;
  display: inline-block; /* Block display for better spacing */
`;

const ProjectCard = ({ title, description, liveLink, backgroundImage }) => {
  return (
    <CardContainer backgroundImage={backgroundImage}>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <LiveLink href={liveLink} target="_blank" rel="noopener noreferrer">View Project</LiveLink>
      </Content>
    </CardContainer>
  );
};

export default ProjectCard;
