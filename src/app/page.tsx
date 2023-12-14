'use client';
import Logo from '@/components/common/header/logo';
import Navbar from '@/components/common/header/navbar';
import MainPage from '@/components/pages/page1';
import AboutMe from '@/components/pages/page2';
import SkillPage from '@/components/pages/page3';
import Project from '@/components/pages/page4';
import Moon from '../app/assets/Moon.svg';
import Sun from '../app/assets/Sun.svg';
import styled from 'styled-components';
import { useState } from 'react';
import useMoveScroll from '@/components/common/hooks/moveScroll';
export default function Home() {
  const [mode, setMode] = useState<Boolean>(false);
  const [element, onMoveToElement] = useMoveScroll();

  return (
    <Container>
      <Navbar />
      <Logo />
      {!mode ? (
        <Moon width={'4rem'} height={'4rem'} onClick={() => setMode(!mode)} />
      ) : (
        <Sun width={'4rem'} height={'4rem'} onClick={() => setMode(!mode)} />
      )}
      <MainPage />
      <AboutMe />
      <SkillPage />
      <Project />
    </Container>
  );
}
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;
