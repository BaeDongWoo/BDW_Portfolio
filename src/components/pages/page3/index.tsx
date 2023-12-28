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
        <SkillIcons setSelectIcon={setSelectIcon} />
        <SkillBoxCon selectIcon={selectIcon} />
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
