import styled from 'styled-components';

const Back = () => {
  return (
    <BackContainer>
      <MainFunc>
        <h3>주요기술</h3>
        <ul>
          <li>기능1</li>
          <li>기능2</li>
          <li>기능3</li>
        </ul>
      </MainFunc>
      <Location>
        <span>깃허브:https://github.com/BaeDongWoo</span>
      </Location>
      <Skills>리액트</Skills>
    </BackContainer>
  );
};
const BackContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
`;
const MainFunc = styled.div`
  width: 100%;
`;
const Location = styled.div`
  width: 100%;
`;
const Skills = styled.div``;
export default Back;
