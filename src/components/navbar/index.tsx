import React from "react";
import {Nav, NavLink, NavMenu } from "./styles";
import { CgLogOut } from 'react-icons/cg'

export const Navbar = () => {
	return(
		<Nav>
			<NavMenu>
				<NavLink to='/home'>
					Home
				</NavLink>
				<NavLink to='/about'>
					About
				</NavLink>
				<NavLink to='/tbd'>
					<CgLogOut />
				</NavLink>
			</NavMenu>
		</Nav>
	)
}
