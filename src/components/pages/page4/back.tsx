import styled from 'styled-components';
import { backDataType } from './projectCard';
import SkillIconBox from './iconList';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
interface propsType {
  backData: backDataType;
  handleFlip: () => void;
}
const Back = ({ backData, handleFlip }: propsType) => {
  return (
    <BackContainer>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation
        modules={[Pagination, Navigation]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        className="backSwiper"
      >
        <SwiperSlide>
          <img src="clink-002.png"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="clink-002.png"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="clink-002.png"></img>
        </SwiperSlide>
      </Swiper>
      <MainFunc>
        <h3>주요기능</h3>
        <ul>
          {backData.mainFunc.map((func, index) => (
            <li key={index}>{func}</li>
          ))}
        </ul>
      </MainFunc>
      <Location>
        {backData.url.map((url, index) => (
          <span key={index}>
            {url.urlTitle} : {url.url}
          </span>
        ))}
      </Location>
      <Skills>
        {backData.skills.map((skill, index) => (
          <SkillIconBox skill={skill} key={index} />
        ))}
      </Skills>

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
`;
const MainFunc = styled.div`
  width: 100%;
  height: 20%;
`;
const Location = styled.div`
  font-size: 0.8rem;
  width: 100%;
  height: 20%;
`;
const Skills = styled.div`
  display: flex;
  height: 15%;
`;
export default Back;
