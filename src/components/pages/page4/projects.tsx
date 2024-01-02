import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { PROJECT_DATA } from '../../data/propjectData';
import './styles.css';
import ProjectCard from './projectCard';
const Projects = () => {
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
        slideShadows: true,
      }}
      navigation
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="mySwiper"
    >
      {PROJECT_DATA.map((data, index) => (
        <SwiperSlide key={index}>
          <ProjectCard data={data} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Projects;
