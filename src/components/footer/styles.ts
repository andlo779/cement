import styled from "styled-components";
import { colors } from "../../styles/colors";
import {NavLink as Link} from "react-router-dom";

export const Footer = styled.footer`
	display: flex;
	justify-content: center;
	position: absolute;
	bottom: 0;
	margin-top: auto;
	padding: 0.2rem 0;
	height: 1.7rem;
	width: 100%;
	align-items: center;
	background-color: ${colors.grey};
	color: ${colors.black};
  overflow: hidden;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: 60px;
  overflow: hidden;
`;
export const Paragraph = styled.p`
  overflow: hidden;
`;

export const NavLink = styled(Link)`
  color: ${colors.black};
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: default;
  &:hover {
    filter: drop-shadow(0 0 2em #ffffff);
  }
`;
