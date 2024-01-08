import styled from 'styled-components';

const Intro = () => {
  return (
    <Introduction>
      <span>안녕하세요!</span>
      <br />
      <span>
        <strong className="underline">프론트엔드</strong> 개발자를 희망하고
        있습니다.
      </span>
      <br />
      <span>
        새로 배우는 것을 좋아해{' '}
        <strong className="underline">항상 즐겁게</strong> 배우고 있습니다.
      </span>
      <br />
      <span>
        꾸준함을 무기로 <strong className="underline">매일 성장하기 </strong>
        위해 노력합니다.
      </span>
    </Introduction>
  );
};
const Introduction = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
  @media (max-width: 1023px) {
    font-size: 1rem;
  }
  @media (max-width: 767px) {
    font-size: 0.8rem;
  }
  .underline {
    text-decoration: none;
    box-shadow: inset 0 -10px 0 hsla(53, 90%, 83%, 0.93);
    padding-bottom: 2px;
  }
`;
export default Intro;
