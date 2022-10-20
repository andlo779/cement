import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import {colors} from "../../styles/colors";

export const Nav = styled.nav`
	position: fixed;
	top: 0;
	width: 100%;
	background: ${colors.teal};
	height: 2.3rem;
	justify-content: space-between;
	padding: 0.5rem 1rem;
  overflow: hidden;
	z-index: 99;
	font-size: 18px;
`;

export const NavMenu = styled.div`
	float: right;
  display: flex;
  overflow: hidden;
`;

export const NavLink = styled(Link)`
  color: ${colors.darkGrey};
  text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: default;
  &.hover {
    filter: drop-shadow(0 0 2em ${colors.black});
  }
	&.active {
		color: ${colors.black};
		font-weight: bold;
	}
	
`;
