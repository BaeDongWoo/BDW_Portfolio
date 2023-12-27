import { RefObject, useEffect } from 'react';
import styled from 'styled-components';
import 'aos/dist/aos.css';
import SkillIcons from './skillIcons';
import SkillBoxCon from './skillBoxCon';
export type SkillProps = {
  element: RefObject<HTMLDivElement>;
};
const SkillPage = ({ element }: SkillProps) => {
  return (
    <Container ref={element}>
      <SkillContainer>
        <SkillIcons />
        <SkillBoxCon />
      </SkillContainer>
    </Container>
  );
};
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  overflow-x: hidden;
  background-color: #2e2e2e;
`;
const SkillContainer = styled.div`
  width: 90vw;
  height: 90vh;
  margin: auto;
  margin-top: 50px;
`;

export default SkillPage;
