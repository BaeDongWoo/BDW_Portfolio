'use client';
import Logo from '@/components/common/header/logo';
import Navbar from '@/components/common/header/navbar';
import MainPage from '@/components/pages/page1';
import AboutMe from '@/components/pages/page2';
import SkillPage from '@/components/pages/page3';
import Project from '@/components/pages/page4';
import AOS from 'aos';
import styled from 'styled-components';
import { useEffect } from 'react';
import useMoveScroll from '@/components/common/hooks/moveScroll';
import Navbox from '@/components/common/header/burgerMenu/navbox';
export default function Home() {
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
  return (
    <Container>
      <Navbar scrolls={scrolls} />
      <Navbox scrolls={scrolls} />
      <Logo onClick={onMoveToMain} />
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
