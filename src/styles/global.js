import { createGlobalStyle } from 'styled-components'
import { Colors } from './styleds'

export const GlobalStyle = createGlobalStyle`
* {
	border: 0;
	box-sizing: border-box;
	margin: 0;
	outline: none !important;
	padding: 0;
	font-family: Verdana, Geneva, Tahoma, sans-serif;

	::before,
	::after {
		box-sizing: inherit;
	}

	::-moz-selection {
		background-color: ${Colors.valencia};
		color: ${Colors.white};
	}

	::selection {
		background-color: ${Colors.valencia};
		color: ${Colors.white};
	}
}

body,
html {
	background-color: ${Colors.alabaster};
	color: ${Colors.grey};
}

ul {
	list-style: none;
}

a {
	text-decoration: none;
}

textarea {
	resize: none;
}
`

