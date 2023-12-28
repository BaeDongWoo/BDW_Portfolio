import styled from 'styled-components';
import SkillBox from './skillBox';
import { SkillBoxDataType } from './index';
interface selectIcon {
  selectIcon: SkillBoxDataType;
}
const SkillBoxCon = ({ selectIcon }: selectIcon) => {
  return (
    <SkillBoxs>
      <SkillBox data={selectIcon} />
    </SkillBoxs>
  );
};
const SkillBoxs = styled.div`
  gap: 10px 30px;
  width: 100%;
  height: 60%;
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(1, 60vw);
  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 80vw);
  }
`;
export default SkillBoxCon;
