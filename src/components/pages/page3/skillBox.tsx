import styled from 'styled-components';
import { SkillBoxDataType } from './skillBoxCon';
interface SkillBoxProps {
  data: SkillBoxDataType;
}
const SkillBox = ({ data }: SkillBoxProps) => {
  return (
    <Container data-aos="flip-left" bgcol={data.bgcol} color={data.color}>
      <div className="name">{data.name}</div>
      <div className="contents">
        <div className="contents__content">{data.content}</div>
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
  color: #2e2e2e;
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
    margin-top: 1.5rem;
    line-height: 150%;

    &__content {
      line-height: 2rem;
      position: relative;
      z-index: 3;
    }
  }
`;
export default SkillBox;
