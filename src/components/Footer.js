import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa'; // Import icons

const FooterSection = styled.footer`
  padding: 2rem;
  background-color: #333;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterText = styled.p`
  margin: 0.5rem 0;
`;

const SocialLinks = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #25D366; /* WhatsApp hover color */
  }

  &.instagram:hover {
    color: #E1306C; /* Instagram hover color */
  }

  &.linkedin:hover {
    color: #0077b5; /* LinkedIn hover color (blue) */
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterText>&copy; 2024 My Portfolio. All rights reserved.</FooterText>
      <FooterText>Connect with me on:</FooterText>
      <SocialLinks>
        <SocialLink href="https://wa.me/+917356694908" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </SocialLink>
        <SocialLink className="instagram" href="https://www.instagram.com/_mr_journey_/profilecard/?igsh=MW53cTBhYjZ6Z2w5cA==" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </SocialLink>
        <SocialLink className="linkedin" href="https://www.linkedin.com/in/sourav-rajeev-k-650590128?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialLink>
      </SocialLinks>
      <FooterText>Email: <a href="mailto:souravrajeevk7@gmail.com" style={{ color: 'white', textDecoration: 'underline' }}>souravrajeevk7@gmail.com</a></FooterText>
    </FooterSection>
  );
};

export default Footer;
