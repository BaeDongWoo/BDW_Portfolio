import styled from 'styled-components';
const Logo = () => {
  return <Container>BDW</Container>;
};
const Container = styled.div`
  position: fixed;
  line-height: 4rem;
  text-align: center;
  font-weight: bold;
  font-size: 2.5rem;
  width: 8rem;
  height: 4rem;
  &:hover {
    cursor: pointer;
  }
`;
export default Logo;
