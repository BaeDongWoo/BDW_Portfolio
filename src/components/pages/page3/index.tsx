import { RefObject, useEffect } from 'react';
import styled from 'styled-components';
import SkillBox from './skillBox';
import 'aos/dist/aos.css';
export type SkillProps = {
  element: RefObject<HTMLDivElement>;
};
interface SkillDataType {
  label: string;
  bg: string;
  color: string;
}
const data: SkillDataType = {
  label: '리액트',
  bg: '#ff6b00',
  color: '#fff',
};
const SkillPage = ({ element }: SkillProps) => {
  return (
    <Container ref={element}>
      <SkillContainer>
        <SkillIcons>
          <Icon data={data}>{data.label}</Icon>
          <Icon data={data}>{data.label}</Icon>
          <Icon data={data}>{data.label}</Icon>
          <Icon data={data}>{data.label}</Icon>
          <Icon data={data}>{data.label}</Icon>
          <Icon data={data}>{data.label}</Icon>
          <Icon data={data}>{data.label}</Icon>
          <Icon data={data}>{data.label}</Icon>
          <Icon data={data}>{data.label}</Icon>
          <Icon data={data}>{data.label}</Icon>
        </SkillIcons>
        <SkillBoxCon>
          <SkillBox />
          <SkillBox />
          <SkillBox />
          <SkillBox />
        </SkillBoxCon>
      </SkillContainer>
    </Container>
  );
};
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
const SkillContainer = styled.div`
  width: 90vw;
  height: 90vh;
  margin: auto;
  margin-top: 50px;
`;
const SkillBoxCon = styled.div`
  gap: 10px 30px;
  width: 100%;
  height: 80%;
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(2, 40vw);
  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 80vw);
  }
`;
const SkillIcons = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1023px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const Icon = styled.div<{ data: SkillDataType }>`
  width: 100px;
  height: 40px;
  border-radius: 20px;
  background-color: ${(props) => props.data.bg};
  color: ${(props) => props.data.color};
  font-weight: bold;
  box-shadow: -1px 4px 5px rgba(0, 0, 0, 0.5);
  border: 2px solid ${(props) => props.data.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1023px) {
    width: 80px;
    height: 30px;
    border-radius: 15px;
  }
`;
export default SkillPage;
