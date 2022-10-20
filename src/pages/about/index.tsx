import React from 'react';
import { GitHubIcon, MailIcon, Link, Logo, Paragraph, SpinningLogo } from './styles'
import reactLogo from '../../assets/react.svg'
import typeScriptLogo from '../../assets/typescript.svg'

export const Index = () => {
	return (
		<div>
			<Paragraph>Cement, is a foremost a learning project where I, the creator, practice my coding skills. In this specific project I am focusing on the following technologies:</Paragraph>
			<div style={{alignItems: 'center'}}>
				<Link href="https://vitejs.dev" target="_blank" rel="noreferrer" title='ViteJs'>
					<Logo src="/vite.svg" alt="Vite logo" />
				</Link>
				<Link href="https://reactjs.org" target="_blank" rel="noreferrer" title='ReactJs'>
					<SpinningLogo src={reactLogo} alt="React logo" />
				</Link>
				<Link href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer" title='TypeScript'>
					<Logo src={typeScriptLogo} alt="TypeScript logo" />
				</Link>
			</div>
			<h3 style={{margin:'0 0 10px 0'}}>About owner:</h3>
			<Paragraph>My name is Andreas Lord and I am working as a Software Engineer since 2011.</Paragraph>
			<Paragraph>You can get in contact with me via my <Link href='mailto:andlo779@gmail.com' title='email'><MailIcon /></Link>.</Paragraph>
			<Paragraph>And here is my <Link href='https://github.com/andlo779' title='GitHub'><GitHubIcon /></Link> profile.</Paragraph>
		</div>
	);
};