import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: white;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  letter-spacing: 2px;
`;

const Hamburger = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;
  color: white;
  z-index: 200; /* Ensure hamburger icon is on top */

  @media (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    height: 100vh;
    width: 100%;
    background-color: rgba(51, 51, 51, 0.95);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    transition: left 0.3s ease-in-out;
    z-index: 100; /* Ensure the menu is below the hamburger */
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo>Sourav Rajeev K</Logo>
      <Hamburger onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <Menu isOpen={isOpen}>
        <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
        <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
        <NavLink to="/portfolio" onClick={toggleMenu}>Portfolio</NavLink>
        <NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink>
      </Menu>
    </Nav>
  );
};

export default Header;
