import React, { useState } from 'react';
import styled from 'styled-components';
type CardProps = {
  label: string;
  value: string;
};
const Cards = ({ label, value }: CardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Card onClick={handleCardClick} data-aos="fade-up" data-aos-duration="1000">
      <CardFace className="card-label">{label}</CardFace>
      <CardFace className="card-value">{value}</CardFace>
    </Card>
  );
};

const Card = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  background-color: #2e2e2e;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  flex-direction: column;
  @media (max-width: 1023px) {
    width: 200px;
    height: 100px;
  }
  @media (max-width: 466px) {
    width: 300px;
    height: 50px;
    flex-direction: row;
  }
  .card-label {
    font-size: 1rem;
    padding-top: 20px;
    @media (max-width: 466px) {
      width: 30%;
      padding-top: 0;
    }
  }
`;

const CardFace = styled.div`
  width: 100%;
  height: 50%;
  font-size: 0.7rem;
  color: white;
  @media (max-width: 466px) {
    font-size: 0.8rem;
    line-height: 50px;
  }
`;
export default Cards;
