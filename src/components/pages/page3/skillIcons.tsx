import styled from 'styled-components';
import { SKILL_ICON_LIST } from '../../data/skillIconData';
import { Dispatch, SetStateAction } from 'react';
import { SkillBoxDataType } from './index';
interface SkillIconsProps {
  setSelectIcon: Dispatch<SetStateAction<SkillBoxDataType>>;
  selectIcon: SkillBoxDataType;
}
const SkillIcons = ({ setSelectIcon, selectIcon }: SkillIconsProps) => {
  const data: SkillBoxDataType[] = SKILL_ICON_LIST;
  const IconHandler = (skill: SkillBoxDataType) => {
    setSelectIcon(skill);
  };
  return (
    <Container>
      {data.map((skill, index) => (
        <Icon
          key={index}
          data={skill}
          className={skill.name === selectIcon.name ? 'select' : ''}
          onClick={() => IconHandler(skill)}
        >
          {skill.name}
        </Icon>
      ))}
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1023px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const Icon = styled.div<{ data: SkillBoxDataType }>`
  width: 100px;
  height: 40px;
  border-radius: 20px;
  background-color: ${(props) => props.data.bgcol};
  color: ${(props) => props.data.color};
  font-weight: bold;
  box-shadow: 0px 10px 0px 0px rgba(0, 0, 0, 0.5);
  border: 2px solid ${(props) => props.data.bgcol};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &.select {
    box-shadow: 0px 0px 0px 0px;
    margin-top: 15px;
    margin-bottom: 5px;
  }
  &:hover {
    margin-top: 15px;
    margin-bottom: 5px;
    box-shadow: 0px 0px 0px 0px;
  }
  @media (max-width: 1023px) {
    width: 80px;
    height: 30px;
    border-radius: 15px;
  }
`;
export default SkillIcons;
