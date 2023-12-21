'use client';
import Logo from '@/components/common/header/logo';
import Navbar from '@/components/common/header/navbar';
import MainPage from '@/components/pages/page1';
import AboutMe from '@/components/pages/page2';
import SkillPage from '@/components/pages/page3';
import Project from '@/components/pages/page4';
import Moon from '../app/assets/Moon.svg';
import Sun from '../app/assets/Sun.svg';
import AOS from 'aos';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import useMoveScroll from '@/components/common/hooks/moveScroll';
import Navbox from '@/components/common/header/burgerMenu/navbox';
export default function Home() {
  const [mode, setMode] = useState<Boolean>(false);
  const [mainScr, onMoveToMain] = useMoveScroll();
  const [aboutMeScr, onMoveToAboutMe] = useMoveScroll();
  const [skillScr, onMoveToSkill] = useMoveScroll();
  const [projectScr, onMoveToProject] = useMoveScroll();
  const scrolls = [
    onMoveToMain,
    onMoveToAboutMe,
    onMoveToSkill,
    onMoveToProject,
  ];
  useEffect(() => {
    AOS.init();
  });

  // useEffect(() => {
  //   let page = 0;
  //   const lastPage = 3;
  //   window.addEventListener(
  //     'wheel',
  //     (e) => {
  //       e.preventDefault();
  //       if (e.deltaY > 0) {
  //         page++;
  //       } else if (e.deltaY < 0) {
  //         page--;
  //       }
  //       if (page < 0) {
  //         page = 0;
  //       } else if (page > lastPage) {
  //         page = lastPage;
  //       }
  //       scrolls[page]();
  //     },
  //     { passive: false }
  //   );
  // }, []);

  return (
    <Container>
      <Navbar scrolls={scrolls} />
      <Navbox scrolls={scrolls} />
      <Logo onClick={onMoveToMain} />
      {/* {!mode ? (
        <Moon width={'4rem'} height={'4rem'} onClick={() => setMode(!mode)} />
      ) : (
        <Sun width={'4rem'} height={'4rem'} onClick={() => setMode(!mode)} />
      )} */}
      <MainPage element={mainScr} />
      <AboutMe element={aboutMeScr} />
      <SkillPage element={skillScr} />
      <Project element={projectScr} />
    </Container>
  );
}
const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
