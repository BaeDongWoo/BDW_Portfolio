import { RefObject, useState } from 'react';
import styled from 'styled-components';
import 'aos/dist/aos.css';
import SkillIcons from './skillIcons';
import SkillBoxCon from './skillBoxCon';
import { SKILL_ICON_LIST } from '../../data/skillIconData';
export type SkillProps = {
  element: RefObject<HTMLDivElement>;
};
export interface SkillBoxDataType {
  name: string;
  bgcol: string;
  color: string;
  content: string;
}
const SkillPage = ({ element }: SkillProps) => {
  const [selectIcon, setSelectIcon] = useState(SKILL_ICON_LIST[0]);
  return (
    <Container ref={element}>
      <SkillContainer>
        <SkillIcons setSelectIcon={setSelectIcon} selectIcon={selectIcon} />
        <SkillBoxCon selectIcon={selectIcon} />
      </SkillContainer>
    </Container>
  );
};
const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #2e2e2e;
`;
const SkillContainer = styled.div`
  width: 90vw;
  height: 90vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (max-width: 1023px) {
    padding-top: 65px;
  }
`;

export default SkillPage;
