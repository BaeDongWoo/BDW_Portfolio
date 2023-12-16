import styled from 'styled-components';
export type NavbarProps = {
  scrolls: (() => void)[];
};
const Navbar = ({ scrolls }: NavbarProps) => {
  return (
    <Container>
      <Nav onClick={scrolls[0]}>어바웃미</Nav>
      <Nav onClick={scrolls[1]}>스킬</Nav>
      <Nav onClick={scrolls[2]}>프로젝트</Nav>
    </Container>
  );
};
const Container = styled.div`
  position: fixed;
  top: 0;
  right: 1.5rem;
  display: flex;
  z-index: 2;
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
