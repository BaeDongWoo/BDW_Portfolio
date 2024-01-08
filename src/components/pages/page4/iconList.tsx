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
  min-width: 80px;
  min-height: 30px;
  padding: 0 10px;
  margin: 5px;
  border-radius: 15px;
  background-color: ${(props) => props.data.bgcol};
  color: ${(props) => props.data.color};
  font-weight: bold;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    min-width: 50px;
    min-height: 20px;
    border-radius: 10px;
    font-size: 0.5rem;
  }
`;
export default SkillIconBox;
