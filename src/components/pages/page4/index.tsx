import { RefObject } from 'react';
import styled from 'styled-components';
export type ProjectProps = {
  element: RefObject<HTMLDivElement>;
};
const Project = ({ element }: ProjectProps) => {
  return (
    <Container ref={element}>
      <h1>Project</h1>
    </Container>
  );
};
const Container = styled.div`
  background-color: gray;
  width: 100vw;
  height: 100vh;
`;
export default Project;
