'use client';
import MainPage from '@/components/pages/page1';
import AboutMe from '@/components/pages/page2';
import SkillPage from '@/components/pages/page3';
import Project from '@/components/pages/page4';
import AOS from 'aos';
import styled from 'styled-components';
import { useEffect } from 'react';
import useMoveScroll from '@/components/common/hooks/moveScroll';
import Header from '@/components/common/header/header';
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
      <Header scrolls={scrolls} onClick={onMoveToMain} />
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
