import styled from "styled-components";
import { colors } from "../../styles/colors";
import {NavLink as Link} from "react-router-dom";

export const Footer = styled.footer`
	display: flex;
	justify-content: center;
	position: absolute;
	bottom: 0;
	width: 100%;
	text-align: center;
	background-color: ${colors.grey};
	color: ${colors.black};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: 60px;
`;

export const NavLink = styled(Link)`
  color: ${colors.black};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;
