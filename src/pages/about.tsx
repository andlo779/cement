import React from 'react';
import { Div, Logo, MailIcon, Paragraph, SpinningLogo } from './styles';
import reactLogo from '../assets/react.svg'
import typeScriptLogo from '../assets/typescript.svg'

export const About = () => {
	return (
		<Div>
			<Paragraph>Cement, is a foremost a learning project where I, the creator, practice my coding skills. In this specific project I am focusing on the following technologies:</Paragraph>
			<div style={{alignItems: 'center'}}>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer" title='ViteJs'>
					<Logo src="/vite.svg" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank" rel="noreferrer" title='ReactJs'>
					<SpinningLogo src={reactLogo} alt="React logo" />
				</a>
				<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer" title='TypeScript'>
					<Logo src={typeScriptLogo} alt="TypeScript logo" />
				</a>
			</div>
			<h3 style={{margin:'0 0 10px 0'}}>About me:</h3>
			<Paragraph>My name is Andreas Lord and I am working as a Software Engineer since 2011.</Paragraph>
			<Paragraph>You can get in contact with me via my <a href='mailto:andlo779@gmail.com' title='email'><MailIcon /></a>.</Paragraph>
		</Div>
	);
};