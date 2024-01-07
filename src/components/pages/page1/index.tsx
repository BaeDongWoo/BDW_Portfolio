import { RefObject } from 'react';
import styled from 'styled-components';
import Wave from './wave';
export type MainPageProps = {
  element: RefObject<HTMLDivElement>;
};
const MainPage = ({ element }: MainPageProps) => {
  return (
    <Container ref={element}>
      <div className="title">
        <div className="span1">
          <span>b</span>
          <span>d</span>
          <span>w</span>
        </div>
        <div className="span2">
          <span>p</span>
          <span>o</span>
          <span>r</span>
          <span>t</span>
          <span>f</span>
          <span>o</span>
          <span>l</span>
          <span>i</span>
          <span>o</span>
        </div>
      </div>
      <Scroll></Scroll>
      <Scroll></Scroll>
      <Scroll></Scroll>
      <Wave />
    </Container>
  );
};
export default MainPage;

const Container = styled.div`
  background: linear-gradient(deepSkyBlue, skyBlue, lightCyan);
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
`;
const Scroll = styled.span`
  position: absolute;
  font-weight: bold;
  top: 65vh;
  left: 50%;
  width: 1.5rem;
  height: 1.5rem;
  margin-left: -12px;
  border-left: 5px solid #000000;
  border-bottom: 5px solid #000000;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: sdb 2s infinite;
  animation: sdb 2s infinite;
  opacity: 0;
  box-sizing: border-box;
  &:nth-of-type(1) {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
  }
  &:nth-of-type(2) {
    top: 66vh;
    -webkit-animation-delay: 0.15s;
    animation-delay: 0.15s;
  }
  &:nth-of-type(3) {
    top: 67vh;
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  @-webkit-keyframes sdb {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes sdb {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
