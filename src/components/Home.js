import React from 'react';
import styled from 'styled-components';

const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
  text-align: center;
  padding: 0 2rem;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadeIn 1s ease-out;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin-bottom: 2rem;
  animation: fadeInUp 1.5s ease-out;
`;

const Button = styled.a`
  padding: 0.8rem 2rem;
  background-color: #ff7e5f;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #feb47b;
    transform: scale(1.1);
  }
`;

const Home = () => {
  return (
    <HomeSection>
      <Title>Welcome to My Portfolio</Title>
      <Description>
        Discover my work and projects with interactive designs and creative solutions.
      </Description>
      <Button href="/test.pdf" download="Sourav Rajeev K.pdf">Download Resume</Button>
    </HomeSection>
  );
};

export default Home;
