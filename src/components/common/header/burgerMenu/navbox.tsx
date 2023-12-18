import { useState } from 'react';
import styled from 'styled-components';
import BugerIcon from './bugerIcon';

const Navbox = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <BugerIcon toggle={toggle} />
      {isMenuOpen && (
        <Container className={'mobile-only' + isMenuOpen ? 'active' : ''}>
          <Items>홈</Items>
          <Items>어바웃미</Items>
          <Items>스킬</Items>
          <Items>프로젝트</Items>
        </Container>
      )}
    </>
  );
};
const Container = styled.div`
  background: #fff;
  border-radius: 8px;
  position: absolute;
  margin-top: 15px;
  top: 30px;
  right: 0;
  width: 120px;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  padding: 10px;
  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const Items = styled.div`
  font-weight: bold;
  cursor: pointer;
`;
export default Navbox;
