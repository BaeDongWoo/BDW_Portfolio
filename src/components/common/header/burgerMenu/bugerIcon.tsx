import styled from 'styled-components';
type bugerIconProps = {
  toggle: () => void;
};
const BugerIcon = ({ toggle }: bugerIconProps) => {
  return (
    <BurgerMenuIcon onClick={toggle} className="mobile-only buger-Icon">
      <div />
      <div />
      <div />
    </BurgerMenuIcon>
  );
};
const BurgerMenuIcon = styled.div`
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 2;
  div {
    width: 30px;
    height: 4px;
    background-color: #000000;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
export default BugerIcon;
