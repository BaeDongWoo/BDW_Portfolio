import { RefObject, useEffect } from 'react';
import styled from 'styled-components';
import ProfileImg from './profile';
import Info from './infomation';
export type AboutMeProps = {
  element: RefObject<HTMLDivElement>;
};
const AboutMe = ({ element }: AboutMeProps) => {
  return (
    <Container ref={element} data-aos="flip-left">
      <UserContainer>
        <ProfileImg />
        <Info />
      </UserContainer>
    </Container>
  );
};
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
const UserContainer = styled.div`
  display: flex;
  margin: auto;
  margin-top: 50px;
  background-color: white;
  border-radius: 25px;
  box-shadow: 8px 4px 8px rgba(0, 0, 0, 0.5);
  width: 90vw;
  height: 90vh;
  max-width: 1570px;
  max-height: 720px;
  flex-wrap: wrap;
  overflow: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export default AboutMe;
