import React from "react";
import {Column, Footer as Foter, NavLink} from './styles'

export const Footer = () => {
	return(
		<Foter>
			<Column>
				<p>Some right reserved, 2022.</p>
			</Column>
			<Column>
				<NavLink to='/about'>About</NavLink>
			</Column>
		</Foter>
	)
}