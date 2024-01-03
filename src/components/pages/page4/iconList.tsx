import styled from 'styled-components';
interface SkillDataType {
  skill: SkillType;
}
interface SkillType {
  name: string;
  bgcol: string;
  color: string;
}
const SkillIconBox = ({ skill }: SkillDataType) => {
  return <Icon data={skill}>{skill.name}</Icon>;
};
const Icon = styled.div<{ data: SkillType }>`
  width: 50px;
  height: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.data.bgcol};
  color: ${(props) => props.data.color};
  font-weight: bold;
  font-size: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default SkillIconBox;
