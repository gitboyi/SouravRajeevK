import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard/ProjectCard'; // Import the ProjectCard component
import tictacimage from '../images/tictactoe.jpg'; // Adjust the path as needed

const PortfolioSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e0f7fa;
  padding: 2rem;
`;

const PortfolioTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem; /* Added margin for spacing */
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem; /* Space between cards */
`;

const Portfolio = () => {
  const projects = [
    {
      title: "TIC TAC TOE",
      description: "",
      liveLink: "https://gitboyi.github.io/react-test/",
      backgroundImage: tictacimage, // Use the imported image
    },
    // {
    //   title: "Project Two",
    //   description: "Description for project two.",
    //   liveLink: "https://example.com/project-two",
    //   backgroundImage: projectTwoImage, // Use the imported image
    // },
    // Add more projects as needed
  ];

  return (
    <PortfolioSection id="portfolio">
      <PortfolioTitle>My Projects and Work</PortfolioTitle>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            liveLink={project.liveLink}
            backgroundImage={project.backgroundImage} // Pass the imported image
          />
        ))}
      </ProjectsContainer>
    </PortfolioSection>
  );
};

export default Portfolio;
