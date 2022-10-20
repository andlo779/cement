import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import {colors} from "../../styles/colors";

export const Nav = styled.nav`
	background: #00abb3;
	height: 40px;
	justify-content: space-between;
	padding: 0.5rem 1rem;
`;

export const NavMenu = styled.div`
	float: right;
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
	//display: flex;
	//align-items: center;
  color: ${colors.darkGrey};
  text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	&.active {
		color: ${colors.black};
		font-weight: bold;
	}
`;
