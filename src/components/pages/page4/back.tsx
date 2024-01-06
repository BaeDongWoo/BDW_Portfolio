import styled from 'styled-components';
import { backDataType } from './projectCard';
import SkillIconBox from './iconList';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
interface propsType {
  backData: backDataType;
  handleFlip: () => void;
}
const Back = ({ backData, handleFlip }: propsType) => {
  return (
    <BackContainer>
      <Swiper
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="backSwiper"
      >
        {backData.imgList.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src}></img>
          </SwiperSlide>
        ))}
      </Swiper>
      <MainFunc>
        <ul>
          {backData.mainFunc.map((func, index) => (
            <li key={index}>{func}</li>
          ))}
        </ul>
      </MainFunc>
      <Skills>
        {backData.skills.map((skill, index) => (
          <SkillIconBox skill={skill} key={index} />
        ))}
      </Skills>
      <Location>
        {backData.url.map((url, index) => (
          <a href={url.url} target="_blank" key={index}>
            <img key={index} src={url.icon}></img>
          </a>
        ))}
      </Location>
      <div className="cta-reverse" onClick={handleFlip}>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="4 1 0 5 4 9"></polyline>
        </svg>
        <span>Click</span>
      </div>
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
  @media (max-width: 767px) {
    font-size: 0.8rem;
  }
`;
const MainFunc = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  li {
    list-style-type: decimal;
    text-align: left;
  }
`;
const Location = styled.div`
  font-size: 0.8rem;
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  height: 20%;
`;
export default Back;
