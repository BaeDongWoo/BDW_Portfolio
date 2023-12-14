import styled from 'styled-components';

const Navbar = () => {
  return (
    <Container>
      <Nav>어바웃미</Nav>
      <Nav>스킬</Nav>
      <Nav>프로젝트</Nav>
    </Container>
  );
};
const Container = styled.div`
  position: fixed;
  top: 0;
  right: 1.5rem;
  display: flex;
`;
const Nav = styled.div`
  font-weight: bold;
  text-align: center;
  line-height: 3rem;
  width: 10rem;
  height: 3rem;
  &:hover {
    cursor: pointer;
  }
`;
export default Navbar;
