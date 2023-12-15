import { RefObject } from 'react';
import styled from 'styled-components';
export type SkillProps = {
  element: RefObject<HTMLDivElement>;
};
const SkillPage = ({ element }: SkillProps) => {
  return (
    <Container ref={element}>
      <h1>SkillPage</h1>
    </Container>
  );
};
const Container = styled.div`
  background-color: aqua;
  width: 100vw;
  height: 100vh;
`;
export default SkillPage;
