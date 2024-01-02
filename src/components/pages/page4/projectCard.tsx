import React, { useState } from 'react';
import styled from 'styled-components';
import Front from './front';
import Back from './back';
interface cardDataType {
  data: {
    front: {
      img: string;
      title: string;
      discript: string;
    };
    back: {
      mainFunc: string[];
      url: { urlTitle: string; url: string }[];
      stack: { name: string; bgcol: string; color: string }[];
    };
  };
}
const ProjectCard = ({ data }: cardDataType) => {
  const [isFlipped, setIsFlipped] = useState<string>('true');

  const handleFlip = () => {
    setIsFlipped(isFlipped === 'true' ? 'false' : 'true');
  };
  return (
    <CardContainer onClick={handleFlip} flipped={isFlipped}>
      <Front />
      <Back />
    </CardContainer>
  );
};
const CardContainer = styled.div<{ flipped: string }>`
  width: 300px;
  height: 500px;
  border: 1px solid #eee;
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${(props) =>
    props.flipped === 'true' ? 'none' : 'rotateY(180deg)'};
`;

export default ProjectCard;
