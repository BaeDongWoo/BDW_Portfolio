import styled from 'styled-components';
import { SKILL_ICON_LIST } from '../../data/skillIconData';
import { Dispatch, SetStateAction } from 'react';
import { SkillBoxDataType } from './index';
interface setSelectIcon {
  setSelectIcon: Dispatch<SetStateAction<SkillBoxDataType>>;
}
const SkillIcons = ({ setSelectIcon }: setSelectIcon) => {
  const data: SkillBoxDataType[] = SKILL_ICON_LIST;
  const IconHandler = (skill: SkillBoxDataType) => {
    setSelectIcon(skill);
  };
  return (
    <Container>
      {data.map((skill, index) => (
        <Icon key={index} data={skill} onClick={() => IconHandler(skill)}>
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
  box-shadow: -1px 4px 5px rgba(0, 0, 0, 0.5);
  border: 2px solid ${(props) => props.data.bgcol};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
  }
  @media (max-width: 1023px) {
    width: 80px;
    height: 30px;
    border-radius: 15px;
  }
`;
export default SkillIcons;
