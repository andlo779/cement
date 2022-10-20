import { createGlobalStyle } from 'styled-components';
import { colors } from "./colors";

export const GlobalStyle = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
		font-family: 'Open Sans', sans-serif;
	}
	#root{
		margin:0 auto;
		background-color: ${colors.space};
		min-height: 100vh;
	}
	h1, h2, h3, p{
		color: ${colors.black};
		//margin-bottom: 10px;
	}
	p{
		//margin-bottom: 20px;
	}
	a{
    text-decoration: none;
    cursor: pointer;
	}
`