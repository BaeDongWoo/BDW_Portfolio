import styled from 'styled-components';
import Cards from './card';
const Info = () => {
  return (
    <InfoContainer>
      <Contact>
        <Cards label="생년월일" value="96.04.17" />
        <Cards label="주소" value="경기도 광주시" />
        <Cards label="전화번호" value="010-4563-0342" />
        <Cards label="이메일" value="ehddn5410@naver.com" />
        <Cards label="깃허브" value="https://github.com/BaeDongWoo" />
        <Cards label="블로그" value="https://velog.io/@b_d_o_o" />
      </Contact>
    </InfoContainer>
  );
};
const InfoContainer = styled.div`
  width: 50%;
  display: flex;
  font-weight: bold;
  @media (max-width: 1023px) {
    width: 100%;
  }
`;
const Contact = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 200px);
  grid-template-rows: repeat(3, 100px);
  gap: 40px 30px;
  @media (max-width: 1023px) {
    gap: 30px 10px;
    grid-template-columns: repeat(3, 200px);
    grid-template-rows: repeat(2, 100px);
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 200px);
    grid-template-rows: repeat(3, 100px);
  }
  @media (max-width: 466px) {
    gap: 10px;
    grid-template-columns: repeat(1, 300px);
    grid-template-rows: repeat(6, 50px);
  }
`;
export default Info;
