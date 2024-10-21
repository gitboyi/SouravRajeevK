import React, { useState } from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 3rem;
  background-color: #fff;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 0.7rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const SocialButtonsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const SocialButton = styled.a`
  padding: 0.5rem 1rem;
  background-color: #0072b1; /* Default color for LinkedIn */
  color: white;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &.whatsapp {
    background-color: #25D366; /* WhatsApp color */
  }

  &.instagram {
    background-color: #E1306C; /* Instagram color */
  }

  &:hover {
    background-color: #005582; /* Darker shade for hover effect */
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    try {
      const response = await fetch('https://formspree.io/f/mjkvkgaa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.log('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <ContactSection>
      <h2>Contact Me</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Your Name"
          required
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Your Email"
          required
          onChange={handleChange}
        />
        <TextArea
          name="message"
          value={formData.message}
          placeholder="Your Message"
          rows="5"
          required
          onChange={handleChange}
        ></TextArea>
        <Button type="submit">Send Message</Button>
      </Form>

      <SocialButtonsContainer>
        <SocialButton className="whatsapp" href="https://wa.me/+917356694908" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </SocialButton>
        <SocialButton className="instagram" href="https://www.instagram.com/_mr_journey_/profilecard/?igsh=MW53cTBhYjZ6Z2w5cA==" target="_blank" rel="noopener noreferrer">
          Instagram
        </SocialButton>
        <SocialButton href="https://www.linkedin.com/in/sourav-rajeev-k-650590128?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </SocialButton>
        <SocialButton href="mailto:souravrajeevk7@gmail.com" target="_blank" rel="noopener noreferrer">
          Gmail
        </SocialButton>
      </SocialButtonsContainer>
    </ContactSection>
  );
};

export default Contact;
