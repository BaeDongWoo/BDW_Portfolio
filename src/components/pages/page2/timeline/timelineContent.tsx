import styled from 'styled-components';
interface contentPros {
  content: string;
}
const TimelineContent = ({ content }: contentPros) => {
  return <Container>{content}</Container>;
};
const Container = styled.div`
  padding: 20px;
  background: #2e2e2e;
  font-size: 0.8rem;
  text-align: left;
  display: flex;
  flex-direction-column;
  align-items: center;
  box-shadow: 5px 5px 10px #242424;
  color: #fff;
  transition: 0.4s ease;
  margin: 0.5rem;
  border-radius: 6px;
  @media (max-width: 375px) {
    font-size: 0.5em;
  }
`;
export default TimelineContent;
