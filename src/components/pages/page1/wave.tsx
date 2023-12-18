import styled from 'styled-components';
const Wave = () => {
  return (
    <Ocean>
      <Waves></Waves>
      <Waves></Waves>
    </Ocean>
  );
};
export default Wave;
const Ocean = styled.div`
  height: 5%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #ffffff;
`;
const Waves = styled.div`
  background: url('wave.svg')
  repeat-x;
  position: absolute;
  top: -198px;
  width: 6400px;
  height: 198px;
  animation: wave 15s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
  &:nth-of-type(2) {
    top: -175px;
    animation: wave 15s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 15s ease -1.25s infinite;
    opacity: 1;
  }
  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  }
  
  @keyframes swell {
    0%, 100% {
      transform: translate3d(0,-25px,0);
    }
    50% {
      transform: translate3d(0,5px,0);
    }
`;
