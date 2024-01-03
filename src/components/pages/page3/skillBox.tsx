import styled from 'styled-components';
import { SkillBoxDataType } from './index';
interface SkillBoxProps {
  data: SkillBoxDataType;
}
const SkillBox = ({ data }: SkillBoxProps) => {
  return (
    <Container bgcol={data.bgcol} color={data.color}>
      <div className="name">{data.name}</div>
      <div className="contents">
        <span className="contents__content">{data.content}</span>
      </div>
    </Container>
  );
};

const Container = styled.div<{ bgcol: string; color: string }>`
  border: 0.2rem solid #2e2e2e;
  border-radius: 2rem;
  padding: 2rem;
  box-shadow: -5px 8px 0px 1px rgba(0, 0, 0, 0.5);
  position: relative;
  background-color: #fff;
  justify-content: center;
  color: #2e2e2e;
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    font-size: 0.7rem;
    padding: 1.5rem;
  }
  @media (max-width: 375px) {
    font-size: 0.6rem;
    padding: 1rem;
  }
  .name {
    transform: rotate(-10deg);
    position: absolute;
    left: -1.5rem;
    top: -1.5rem;
    background-color: ${(props) => props.bgcol};
    color: ${(props) => props.color};
    box-shadow: -5px 8px 0px 1px rgba(0, 0, 0, 0.5);
    border: 0.2rem solid #2e2e2e;
    border-radius: 2rem;
    padding: 0.5rem 1rem;
    font-size: 2rem;
    font-weight: 800;
    @media (max-width: 767px) {
      font-size: 1rem;
    }
  }
  .contents {
    line-height: 150%;
    text-align: left;
    &__content {
      line-height: 2rem;
      position: relative;
      z-index: 3;
      white-space: pre-line;
      @media (max-width: 767px) {
        font-size: 0.6rem;
      }
      @media (max-width: 375px) {
        font-size: 0.5rem;
      }
    }
  }
`;
export default SkillBox;
