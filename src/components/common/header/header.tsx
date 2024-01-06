import React, { useState, useEffect, Children } from 'react';
import styled from 'styled-components';
import Navbar from './navbar';
import Logo from './logo';
import BugerIcon from './burgerMenu/burgerIcon';
import ToggleBox from './burgerMenu/togglebox';
export interface NavbarProps {
  scrolls: (() => void)[];
  onClick: () => void;
}
const Header = ({ scrolls, onClick }: NavbarProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container scroll={scrollPosition}>
      <Logo onClick={onClick} />
      <Navbar scrolls={scrolls} />
      <BugerIcon toggle={toggle} />
      <ToggleBox scrolls={scrolls} isMenuOpen={isMenuOpen} toggle={toggle} />
    </Container>
  );
};

const Container = styled.div<{ scroll: number }>`
  width: 100%;
  height: 4rem;
  position: fixed;
  left: 0;
  top: 0;
  background-color: ${(props) => (props.scroll === 0 ? '' : '#fff')};
  box-shadow: ${(props) =>
    props.scroll === 0 ? '' : '0 1px 0.3rem hsla(0, 0%, 80%, 0.8)'};
  z-index: 3;
  transition: background-color 0.3s ease;
  @media (max-width: 767px) {
    background-color: #fff;
    box-shadow: 0 1px 0.3rem hsla(0, 0%, 80%, 0.8);
  }
`;

export default Header;
