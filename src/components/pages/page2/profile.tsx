import styled from 'styled-components';
import Intro from './intro';
import LinkIcon from './linkIcon';
const Profile = () => {
  return (
    <Container>
      <Background />
      <ImgContainer src="123.jpg"></ImgContainer>{' '}
      <Name>
        <Ko>배동우</Ko>
      </Name>
      <Intro />
      <LinkIcon />
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  width: 50%;
  @media (max-width: 1250px) {
    min-width: 350px;
  }
  @media (max-width: 1023px) {
    min-width: 250px;
    width: 100%;
  }
`;
const Background = styled.div`
  position: absolute;
  border-radius: 25px 25px 0 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 150px;
  background-color: #2e2e2e;
  z-index: 1;
  @media (max-width: 1023px) {
    height: 100px;
  }
`;
const ImgContainer = styled.img<{ src: string }>`
  margin-top: 35px;
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  z-index: 2;
  @media (max-width: 1023px) {
    width: 200px;
    height: 200px;
    margin-top: 0;
  }
`;
const Name = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;
const Ko = styled.span`
  font-size: 3rem;
  @media (max-width: 1023px) {
    font-size: 2rem;
  }
  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
`;
export default Profile;
