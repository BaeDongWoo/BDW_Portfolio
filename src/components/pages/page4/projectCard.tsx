import React, { useState } from 'react';
import styled from 'styled-components';

const ProjectCard = () => {
  return (
    <CardContainer>
      <ImgBox>
        <img src="123.jpg"></img>
      </ImgBox>
      <ProjectTitle>
        <h1>땡그랑</h1>
      </ProjectTitle>
      <ProjectMember>
        <h3>1인</h3>
      </ProjectMember>
      <Discription>
        <p>
          시부엉 시부엉 시부엉 시부엉시부엉 시부엉 시부엉 시부엉시부엉 시부엉
          시부엉 시부엉시부엉 시부엉 시부엉 시부엉시부엉 시부엉 시부엉
          시부엉시부엉 시부엉 시부엉 시부엉시부엉 시부엉 시부엉 시부엉
        </p>
      </Discription>
      <button>클릭</button>
    </CardContainer>
  );
};
const CardContainer = styled.div`
  width: 300px;
  height: 500px;
  border: 1px solid #eee;
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImgBox = styled.div`
  width: 100px;
  height: 150px;
  background-color: #fff;
  img {
    object-fit: contain;
  }
`;
const ProjectTitle = styled.div`
  width: 100px;
  height: 50px;
`;
const ProjectMember = styled.div`
  width: 100px;
  height: 50px;
`;
const Discription = styled.div`
  width: 80%;
  padding: 10px;
`;

export default ProjectCard;
