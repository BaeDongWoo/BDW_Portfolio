import { RefObject, useEffect } from 'react';
import styled from 'styled-components';
import Profile from './profile';
import TimelineEx from './timeline/timeLine';
export type AboutMeProps = {
  element: RefObject<HTMLDivElement>;
};
const AboutMe = ({ element }: AboutMeProps) => {
  return (
    <Container ref={element} data-aos="flip-left">
      <UserContainer>
        <Profile />
        <TimelineEx />
      </UserContainer>
    </Container>
  );
};
const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-item: center;
  padding-bottom: 50px;
  padding-top: 65px;
`;
const UserContainer = styled.div`
  display: flex;
  margin: auto;
  padding-bottom: 50px;
  background-color: #fff;
  border-radius: 25px;
  box-shadow: 8px 4px 8px rgba(0, 0, 0, 0.5);
  width: 90vw;
  max-width: 1570px;
  min-width: 320px;
  flex-wrap: wrap;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export default AboutMe;
