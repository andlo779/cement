import React, {useState} from "react";
import {LoginButton, LoginIcon, Nav, NavLink, NavMenu} from "./styles";
import {LoginPopup} from "../loginPopup";

export const Navbar = () => {
	const [showLogin, setShowLogin] = useState(false);

	return(
		<Nav>
			<NavMenu>
				<NavLink to='/home'>
					Home
				</NavLink>
				<NavLink to='/about'>
					About
				</NavLink>
				<LoginButton onClick={() => setShowLogin(true)}>
					<LoginIcon />
				</LoginButton>
				{showLogin ? <LoginPopup /> : null}
			</NavMenu>
		</Nav>
	)
}
