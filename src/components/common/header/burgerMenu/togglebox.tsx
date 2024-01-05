import styled from 'styled-components';
export type NavbarProps = {
  scrolls: (() => void)[];
  isMenuOpen: boolean;
};
const ToggleBox = ({ scrolls, isMenuOpen }: NavbarProps) => {
  return (
    <Container className={isMenuOpen ? 'active' : ''}>
      <Items onClick={scrolls[1]}>About</Items>
      <Items onClick={scrolls[2]}>Skill</Items>
      <Items onClick={scrolls[3]}>Project</Items>
    </Container>
  );
};
const Container = styled.div`
  overflow: hidden;
  background-color: #ccc;
  position: fixed;
  top: 4rem;
  right: 0;
  width: 100%;
  text-align: center;
  max-height: 0;
  z-index: 3;
  transition: max-height 0.2s ease;
  &.active {
    max-height: 15rem;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
const Items = styled.div`
  background-color: #ccc;
  font-weight: bold;
  cursor: pointer;
  padding: 10px;
  z-index: 3;
`;
export default ToggleBox;
