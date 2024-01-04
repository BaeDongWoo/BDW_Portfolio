import styled from 'styled-components';
export type NavbarProps = {
  scrolls: (() => void)[];
};
const Navbar = ({ scrolls }: NavbarProps) => {
  return (
    <Container className="pc-only">
      <Nav onClick={scrolls[1]}>About</Nav>
      <Nav onClick={scrolls[2]}>Skill</Nav>
      <Nav onClick={scrolls[3]}>Project</Nav>
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
  @media (max-width: 767px) {
    display: none;
  }
  &:hover {
    cursor: pointer;
  }
`;
export default Navbar;
