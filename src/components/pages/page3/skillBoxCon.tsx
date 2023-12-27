import styled from 'styled-components';
import SkillBox from './skillBox';
import { SKILL_BOX_DATA } from '../../data/skillBoxData';
export interface SkillBoxDataType {
  name: string;
  bgcol: string;
  color: string;
  content: string;
}
interface SkillBoxData {
  REACT: SkillBoxDataType;
  HTML_CSS: SkillBoxDataType;
  JS: SkillBoxDataType;
  MYSQL: SkillBoxDataType;
}
const SkillBoxCon = () => {
  const data: SkillBoxData = SKILL_BOX_DATA;
  return (
    <SkillBoxs>
      <SkillBox data={data.REACT} />
      <SkillBox data={data.HTML_CSS} />
      <SkillBox data={data.JS} />
      <SkillBox data={data.MYSQL} />
    </SkillBoxs>
  );
};
const SkillBoxs = styled.div`
  gap: 10px 30px;
  width: 100%;
  height: 80%;
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(2, 40vw);
  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 80vw);
  }
`;
export default SkillBoxCon;
