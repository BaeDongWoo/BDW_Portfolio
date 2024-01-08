import styled from 'styled-components';
import NavBackGround from './header';
interface NavbarProps {
  scrolls: (() => void)[];
}
const Navbar = ({ scrolls }: NavbarProps) => {
  return (
    <Container className="pc-only">
      <Nav onClick={scrolls[1]}>About</Nav>
      <Nav onClick={scrolls[2]}>Skill</Nav>
      <Nav onClick={scrolls[3]}>Project</Nav>
    </Container>
  );
};
const Container = styled.nav`
  position: fixed;
  top: 0;
  right: 1.5rem;
  display: flex;
  z-index: 2;
`;
const Nav = styled.div`
  font-weight: bold;
  text-align: center;
  line-height: 4rem;
  width: 10rem;
  height: 3rem;
  z-index: 2;
  @media (max-width: 767px) {
    display: none;
  }
  &:hover {
    cursor: pointer;
    color: #ff6b00;
  }
`;
export default Navbar;
