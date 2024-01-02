import React, { useState } from 'react';
import styled from 'styled-components';
import Front from './front';
import Back from './back';
export interface frontDataType {
  img: string;
  title: string;
  discript: string;
  people: string;
}
export interface backDataType {
  mainFunc: string[];
  url: { urlTitle: string; url: string }[];
  skills: { name: string; bgcol: string; color: string }[];
}
interface cardDataType {
  data: {
    front: frontDataType;
    back: backDataType;
  };
}
const ProjectCard = ({ data }: cardDataType) => {
  const [isFlipped, setIsFlipped] = useState<string>('true');
  const handleFlip = () => {
    setIsFlipped(isFlipped === 'true' ? 'false' : 'true');
  };
  return (
    <CardContainer flipped={isFlipped}>
      <Front frontData={data.front} handleFlip={handleFlip} />
      <Back backData={data.back} handleFlip={handleFlip} />
    </CardContainer>
  );
};
const CardContainer = styled.div<{ flipped: string }>`
  width: 450px;
  height: 700px;
  border: 1px solid #eee;
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  @media (max-width: 767px) {
    width: 300px;
    height: 500px;
  }
  transform: ${(props) =>
    props.flipped === 'true' ? 'none' : 'rotateY(-180deg)'};
`;

export default ProjectCard;
