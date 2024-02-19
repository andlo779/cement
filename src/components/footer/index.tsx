import React from 'react';
import {Column, Footer as Foter, NavLink, Paragraph} from './styles';

export const Footer = () => {
	return(
		<Foter>
			<Column>
				<Paragraph>Some right reserved, 2022.</Paragraph>
			</Column>
			<Column>
				<NavLink to='/about'>About</NavLink>
			</Column>
		</Foter>
	);
};