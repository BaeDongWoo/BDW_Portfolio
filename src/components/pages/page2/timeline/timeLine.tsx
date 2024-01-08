import React from 'react';
import styled from 'styled-components';
import { TIMELINE_DATA } from '../../../data/profileData';
import TimelineTitle from './timelineTitle';
import MiddleLine from './middleLine';
import TimelineContent from './timelineContent';
const Timeline = () => {
  return (
    <Container>
      <h1>Histoy</h1>
      {TIMELINE_DATA.map((data, idx) =>
        idx % 2 === 0 ? (
          <TimelineGrid key={idx}>
            <TimelineTitle date={data.date} title={data.title} />
            <MiddleLine />
            <TimelineContent content={data.content} />
          </TimelineGrid>
        ) : (
          <TimelineGrid key={idx}>
            <TimelineContent content={data.content} />
            <MiddleLine />
            <TimelineTitle date={data.date} title={data.title} />
          </TimelineGrid>
        )
      )}
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
const TimelineGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 3px 1fr;
`;

export default Timeline;
