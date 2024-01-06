import styled from 'styled-components';
import { SkillBoxDataType } from './index';
import { SkillIconsProps } from './skillIcons';
interface IconPropsType extends SkillIconsProps {
  skill: SkillBoxDataType;
}
const SkillIcon = ({ skill, setSelectIcon, selectIcon }: IconPropsType) => {
  const IconHandler = (skill: SkillBoxDataType) => {
    setSelectIcon(skill);
  };
  return (
    <Icon
      data={skill}
      className={skill.name === selectIcon.name ? 'select' : ''}
      onClick={() => IconHandler(skill)}
    >
      {skill.name}
    </Icon>
  );
};
const Icon = styled.div<{ data: SkillBoxDataType }>`
  width: 100px;
  height: 40px;
  border-radius: 20px;
  margin: 5px;
  background-color: ${(props) => props.data.bgcol};
  color: ${(props) => props.data.color};
  font-weight: bold;
  box-shadow: 0px 10px 0px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &.select {
    box-shadow: 0px 0px 0px 5px ${(props) => props.data.bgcol}80;
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
export default SkillIcon;
