import { RefObject } from 'react';
import styled from 'styled-components';
export type MainPageProps = {
  element: RefObject<HTMLDivElement>;
};
const MainPage = ({ element }: MainPageProps) => {
  return (
    <Container ref={element}>
      <h1>MainPage</h1>
    </Container>
  );
};
export default MainPage;
const Container = styled.div`
  background-color: blue;
  width: 100vw;
  height: 100vh;
`;
