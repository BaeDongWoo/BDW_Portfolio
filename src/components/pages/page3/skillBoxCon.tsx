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
  @media (max-width: 767px) {
    margin-top: 40px;
  }
`;
export default SkillBoxCon;
