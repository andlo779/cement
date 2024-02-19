import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export const GlobalStyle = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
		font-family: 'Open Sans', sans-serif;
	}
	#root{
		position: relative;
		background-color: ${colors.space};
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
	h1, h2, h3, p{
		color: ${colors.black};
	}
`;