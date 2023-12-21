import styled from 'styled-components';

const SkillBox = () => (
  // data-aos="fade-up"
  <Container>
    <div className="name">리액트</div>
    <div className="contents">
      <div className="contents__content">리액트 쓸줄알아욤</div>
    </div>
  </Container>
);
const Container = styled.div`
  border: 0.2rem solid #2e2e2e;
  border-radius: 2rem;
  padding: 2rem;
  box-shadow: -5px 8px 0px 1px rgba(0, 0, 0, 0.5);
  position: relative;
  .name {
    transform: rotate(-10deg);
    position: absolute;
    left: -1.5rem;
    top: -1.5rem;
    box-shadow: -5px 8px 0px 1px rgba(0, 0, 0, 0.5);
    border: 0.2rem solid #2e2e2e;
    border-radius: 2rem;
    color: #ff6b00;
    background-color: #fff;
    padding: 0.5rem 1rem;
    font-size: 2rem;
    font-weight: 800;
    @media (max-width: 767px) {
      font-size: 1rem;
    }
  }
  .contents {
    margin-top: 1.5rem;
    color: #white;
    line-height: 150%;
    &__content {
      line-height: 2rem;
      position: relative;
      z-index: 3;
    }
  }
`;

export default SkillBox;
