import { RefObject, useEffect } from 'react';
import styled from 'styled-components';
import Projects from './projects';
export type ProjectProps = {
  element: RefObject<HTMLDivElement>;
};
const Project = ({ element }: ProjectProps) => {
  return (
    <Container ref={element}>
      <ProjectCon>
        <h1 className="title">ProJect</h1>
        <Projects />
      </ProjectCon>
    </Container>
  );
};
const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding-top: 65px;
`;
const ProjectCon = styled.div`
  position: relative;
  margin: auto;
  width: 90vw;
  min-height: 90vh;
  display: flex;
  align-items: center;
  .title {
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    font-size: 3rem;
    z-index: 2;
    text-shadow: -1px 1px 0 #ff6b00, -2px 2px 0 #ff6b00, -3px 4px 0 #ff6b00,
      -4px 5px 0 #ff6b00, -5px 7px 0 #ff6b00, -6px 8px 0 #ff6b00,
      -7px 10px 0 #ff6b00;
    @media (max-width: 767px) {
      font-size: 2rem;
    }
  }
`;
export default Project;
