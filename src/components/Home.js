import React from 'react';
import styled from 'styled-components';
import kannurImage from '../images/kannur.jpg';
import servicesImage from '../images/college.jpg';

// Styled Components
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

// Parallax Section
const KannurSection = styled.section`
  height: 100vh;
  background-image: url(${kannurImage});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  display: flex;
  flex-direction: column; /* Change to column to stack content vertically */
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;

  h2 {
    font-size: 3rem;
    margin: 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: 1.5rem;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    padding: 1rem 2rem;
  }
`;

// Services Section
const ServicesSection = styled.section`
  height: 100vh;
  background-image: url(${servicesImage});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  display: flex;
  flex-direction: column; /* Change to column to stack content vertically */
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;

  h2 {
    font-size: 3rem;
    margin: 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: 1.5rem;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  }
`;

const Home = () => {
  return (
    <>
      <HomeSection>
        <Title>Welcome to My Portfolio</Title>
        <Description>
          Discover my work and projects with interactive designs and creative solutions.
        </Description>
        <Button href={`${process.env.PUBLIC_URL}/SouravRajeevK.pdf`} download="SouravRajeevK.pdf">
          Download Resume
        </Button>
      </HomeSection>

      <KannurSection>
        <h2>My Roots in Kannur</h2>
        <p>
          I was born and raised in Kannur, Kerala, a beautiful coastal city known for its rich culture and stunning landscapes. Growing up here, I developed a deep appreciation for nature and the vibrant traditions of my hometown.
        </p>
      </KannurSection>

      <ServicesSection>
      <h2>My Professional Background</h2>
      <p>I have completed my B-Tech degree in Computer Science from St. Thomas College of Engineering and Technology in Mattannur, Kerala, India.</p>
      </ServicesSection>
    </>
  );
};

export default Home;
