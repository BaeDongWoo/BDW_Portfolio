// TimelineComponent.tsx
import React from 'react';
import styled from 'styled-components';

const TimelineEx = () => {
  return (
    <Container>
      <h1 className="title">Histoy</h1>
      <Timeline>
        <TimelineComponent>
          <div className="date">2023.10 -</div>
          <div className="date">2023.11</div>
          <TimelineContent>
            <p>
              우아한 테크 코스
              <br />
              프리코스
            </p>
          </TimelineContent>
        </TimelineComponent>
        <TimelineMiddle>
          <TimelineCircle></TimelineCircle>
        </TimelineMiddle>
        <div className="timeline-empty"></div>
        <div className="timeline-empty"></div>
        <TimelineMiddle>
          <TimelineCircle></TimelineCircle>
        </TimelineMiddle>
        <TimelineComponent>
          <div className="date">2023.02 -</div>
          <div className="date">2023.08</div>
          <TimelineContent>
            <p>
              신한 DS 금융 <br />
              SW 아카데미
            </p>
          </TimelineContent>
        </TimelineComponent>
        <TimelineComponent>
          <div className="date">2023.01 -</div>
          <div className="date">2023.02</div>
          <TimelineContent>
            <p>
              삼성 DX 알고리즘 <br /> 특강
            </p>
          </TimelineContent>
        </TimelineComponent>
        <TimelineMiddle>
          <TimelineCircle></TimelineCircle>
        </TimelineMiddle>
        <div className="timeline-empty"></div>
        <div className="timeline-empty"></div>
        <TimelineMiddle>
          <TimelineCircle></TimelineCircle>
        </TimelineMiddle>
        <TimelineComponent>
          <div className="date">2022.08 -</div>
          <div className="date">ing</div>
          <TimelineContent>
            <p>첫 학습 시작</p>
          </TimelineContent>
        </TimelineComponent>
      </Timeline>
    </Container>
  );
};
const Container = styled.div`
  width: 50%;
  display: flex;
  padding-top: 20px;
  margin: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1023px) {
    width: 100%;
  }
`;

const TimelineContent = styled.div`
  padding: 20px;
  background: #2e2e2e;
  box-shadow: 5px 5px 10px #242424;
  color: #fff;
  transition: 0.4s ease;
  margin: 1rem;
  margin-bottom: 20px;
  border-radius: 6px;
`;

const TimelineComponent = styled.div`
  margin: 0px 20px 20px 20px;
  font-size: 0.8rem;
`;

const Timeline = styled.div`
  display: grid;
  grid-template-columns: 1fr 3px 1fr;
`;

const TimelineMiddle = styled.div`
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
export default TimelineEx;
