import styled from 'styled-components';
import { LINK_ICON } from '../../data/profileData';
const LinkIcon = () => {
  return (
    <Container>
      {LINK_ICON.map((data, idx) => (
        <IconBox key={idx}>
          <a href={data.url} target="_blank">
            <img src={data.src}></img>
          </a>
          {data.label}
        </IconBox>
      ))}
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  max-width: 500px;
  margin: auto;
  display: flex;
  justify-content: space-around;
`;
const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  a img {
    width: 70px;
    height: 70px;
    @media (max-width: 767px) {
      width: 50px;
      height: 50px;
    }
  }
`;
export default LinkIcon;
