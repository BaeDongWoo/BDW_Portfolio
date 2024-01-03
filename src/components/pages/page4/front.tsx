import styled from 'styled-components';
import { frontDataType } from './projectCard';
import './styles.css';
interface propsType {
  frontData: frontDataType;
  handleFlip: () => void;
}
const Front = ({ frontData, handleFlip }: propsType) => {
  return (
    <FrontContainer>
      <ImgBox src={frontData.img}></ImgBox>
      <ProjectTitle>
        <h2>{frontData.title}</h2>
        <h4>{frontData.people}</h4>
      </ProjectTitle>
      <Discription>{frontData.discript}</Discription>
      <div className="cta" onClick={handleFlip}>
        <span>Click</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </div>
    </FrontContainer>
  );
};
const FrontContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ImgBox = styled.img<{ src: string }>`
  width: 350px;
  height: 200px;
  margin-top: 25px;
  border-radius: 25px;
  background-color: #fff;
  object-fit: cover;
  @media (max-width: 767px) {
    width: 250px;
    height: 150px;
  }
`;
const ProjectTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 15%;
`;
const Discription = styled.div`
  width: 80%;
  height: 40%;
  padding: 10px;
  text-align: left;
  white-space: pre-line;
  @media (max-width: 767px) {
    font-size: 0.8rem;
  }
`;
export default Front;
