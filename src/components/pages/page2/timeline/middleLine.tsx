import styled from 'styled-components';

const MiddleLine = () => {
  return (
    <TimelineMiddleLine>
      <TimelineCircle></TimelineCircle>
    </TimelineMiddleLine>
  );
};
const TimelineMiddleLine = styled.div`
  position: relative;
  background-image: linear-gradient(45deg, #f27121, #e94057, #8a2387);
  width: 3px;
  height: 100%;
  }
`;

const TimelineCircle = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-image: linear-gradient(45deg, #f27121, #e94057, #8a2387);
  transform: translateX(-50%);
`;
export default MiddleLine;
