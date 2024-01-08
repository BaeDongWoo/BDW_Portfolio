import styled from 'styled-components';
interface titlePros {
  date: string;
  title: string;
}
const TimelineTitle = ({ date, title }: titlePros) => {
  return (
    <Container>
      <div className="date">{date}</div>
      <Title>
        <p>{title}</p>
      </Title>
    </Container>
  );
};
const Container = styled.div`
  margin: 0px 20px 20px 20px;
  font-size: 1rem;
  @media (max-width: 375px) {
    font-size: 0.6rem;
  }
`;
const Title = styled.div`
  padding: 20px;
  background: #2e2e2e;
  box-shadow: 5px 5px 10px #242424;
  color: #fff;
  transition: 0.4s ease;
  margin: 1rem;
  border-radius: 6px;
  white-space: pre-line;
`;
export default TimelineTitle;
