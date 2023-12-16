import { RefObject } from 'react';
import styled, { css } from 'styled-components';
import Wave from './wave';
export type MainPageProps = {
  element: RefObject<HTMLDivElement>;
};
const MainPage = ({ element }: MainPageProps) => {
  return (
    <Container ref={element}>
      <h1>MainPage</h1>
      <Wave />
    </Container>
  );
};
export default MainPage;

const Container = styled.div`
  background: linear-gradient(deepSkyBlue, skyBlue, lightCyan);
  width: 100vw;
  height: 100vh;
  position: relative;
`;
