import { RefObject } from 'react';
import styled from 'styled-components';
export type AboutMeProps = {
  element: RefObject<HTMLDivElement>;
};
const AboutMe = ({ element }: AboutMeProps) => {
  return (
    <Container ref={element}>
      <h1>AboutMe</h1>;
    </Container>
  );
};
const Container = styled.div`
  background-color: pink;
  width: 100vw;
  height: 100vh;
`;
export default AboutMe;
