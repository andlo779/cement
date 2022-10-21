import {NavLink as Link} from 'react-router-dom';
import styled from 'styled-components';
import {colors} from '../../styles/colors';
import {TbLogin, TbLogout} from 'react-icons/tb';


export const Nav = styled.nav`
  background: ${colors.teal};
  font-size: 18px;
  height: 2.3rem;
  justify-content: space-between;
  overflow: hidden;
  padding: 0.5rem 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
`;

export const NavMenu = styled.div`
  display: flex;
  float: right;
  overflow: hidden;
`;

export const NavLink = styled(Link)`
  color: ${colors.darkGrey};
  cursor: default;
  padding: 0 1rem;
  text-decoration: none;

  &:hover {
    filter: drop-shadow(0 0 2em ${colors.black});
    color: ${colors.black};

  }

  &.active {
    color: ${colors.black};
    font-weight: bold;
  }
`;

export const LoginButton = styled.button`
  background: none;
  border: none;
  color: ${colors.darkGrey};
  display: inline;
  padding: 0 1rem;
`;

export const LoginIcon = styled(TbLogin)`
  height: 100%;
  width: 1.2rem;
  stroke-width: 2.3;

  &:hover {
    color: ${colors.black};
  }
`;

export const LogoutIcon = styled(TbLogout)`
  height: 100%;
  width: 1.2rem;
  stroke-width: 2.3;

  &:hover {
    color: ${colors.black};
  }
`;