import styled from 'styled-components';
export type NavbarProps = {
  scrolls: (() => void)[];
  isMenuOpen: boolean;
  toggle: () => void;
};
const clickHandler = (scroll: () => void, toggle: () => void) => {
  scroll();
  toggle();
};
const ToggleBox = ({ scrolls, isMenuOpen, toggle }: NavbarProps) => {
  return (
    <Container className={isMenuOpen ? 'active' : ''}>
      <Items onClick={() => clickHandler(scrolls[1], toggle)}>About</Items>
      <Items onClick={() => clickHandler(scrolls[2], toggle)}>Skill</Items>
      <Items onClick={() => clickHandler(scrolls[3], toggle)}>Project</Items>
    </Container>
  );
};
const Container = styled.div`
  overflow: hidden;
  background-color: #fff;
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
  background-color: #fff;
  font-weight: bold;
  cursor: pointer;
  padding: 10px;
  z-index: 3;
`;
export default ToggleBox;
