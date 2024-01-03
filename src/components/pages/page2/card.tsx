import React, { useState } from 'react';
import styled from 'styled-components';
type CardProps = {
  label: string;
  value: string;
};
const Cards = ({ label, value }: CardProps) => {
  const handleCardClick = () => {
    if (label === '깃허브' || label === '블로그') {
      window.open(value, '_blank');
    }
  };

  return (
    <Card onClick={handleCardClick} label={label}>
      <CardFace className="card-label">{label}</CardFace>
      <CardFace className="card-value">{value}</CardFace>
    </Card>
  );
};

const Card = styled.div<{ label: string }>`
  width: 200px;
  height: 100px;
  display: flex;
  background-color: #2e2e2e;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  flex-direction: column;
  cursor: ${(props) =>
    props.label === '깃허브' || props.label === '블로그' ? 'pointer' : ''};
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
