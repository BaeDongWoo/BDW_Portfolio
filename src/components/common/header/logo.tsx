import styled from 'styled-components';
export type onClickType = {
  onClick: () => void;
};
const Logo = ({ onClick }: onClickType) => {
  return <Container onClick={onClick}>BDW</Container>;
};
const Container = styled.div`
  position: fixed;
  line-height: 4rem;
  text-align: center;
  font-weight: bold;
  font-size: 2.5rem;
  width: 8rem;
  height: 4rem;
  z-index: 2;
  &:hover {
    cursor: pointer;
    color: #ff6b00;
  }
`;
export default Logo;
