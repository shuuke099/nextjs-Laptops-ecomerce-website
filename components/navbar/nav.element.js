import { Container } from '../../src/globalStyles';
import styled from 'styled-components';
import { HiMenu } from 'react-icons/hi';
import { FaShoppingCart } from 'react-icons/fa';
// export const Navbar = styled.div``

export const UpperNav = styled.div`
  height: 2.3rem;
  background: #cda67f;
  display: flex;
  justify-content: space-between;
`;

export const Nav = styled.div`
  height: 4rem;
  background: #fff;
  display: flex;

  @media screen and (min-width: 768px) {
    border-bottom: 1px solid #000;
    height: 5rem;
  }
`;
export const NavConainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Navlogo = styled.div`
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.div`
  background: center / contain no-repeat url('/img/27.png');
  width: 3rem;
  height: 2rem;
`;

export const MenueICon = styled(HiMenu)`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
`;

export const BascketICon = styled(FaShoppingCart)`
  width: 1.5rem;
  height: 1.5rem;
`;
