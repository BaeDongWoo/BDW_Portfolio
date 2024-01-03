import styled from 'styled-components';
import { SKILL_ICON_LIST } from '../../data/skillIconData';
import { Dispatch, SetStateAction } from 'react';
import { SkillBoxDataType } from './index';
import SkillIcon from './icon';
export interface SkillIconsProps {
  setSelectIcon: Dispatch<SetStateAction<SkillBoxDataType>>;
  selectIcon: SkillBoxDataType;
}
const SkillIcons = ({ setSelectIcon, selectIcon }: SkillIconsProps) => {
  const data: SkillBoxDataType[] = SKILL_ICON_LIST;

  return (
    <Container>
      {data.map((skill, index) => (
        <SkillIcon
          key={index}
          skill={skill}
          setSelectIcon={setSelectIcon}
          selectIcon={selectIcon}
        />
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
export default SkillIcons;
