import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { PROJECT_DATA } from '../../data/projectData';
import './styles.css';
import ProjectCard from './projectCard';
import SwiperCore from 'swiper/core';
import { useEffect, useRef, useState } from 'react';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [swiper, setSwiper] = useState<SwiperCore>();
  const handleSlideChange = (swiper: SwiperCore) => {
    setActiveIndex(swiper.activeIndex);
  };
  const handleSlideClick = (index: number) => {
    if (swiper) swiper.slideTo(index);
  };
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      initialSlide={1}
      observer={true}
      observeParents={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={{ clickable: true }}
      navigation
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="mySwiper"
      onSlideChange={handleSlideChange}
      onSwiper={(swiperInstance) => {
        setSwiper(swiperInstance);
      }}
    >
      {PROJECT_DATA.map((data, index) => (
        <SwiperSlide key={index} onClick={() => handleSlideClick(index)}>
          <ProjectCard data={data} activeIndex={activeIndex} index={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Projects;
