import { createGlobalStyle } from 'styled-components' ;

export const GlobalStyle = createGlobalStyle`
  :root {
    --lightGrey: #eee;
    --medGrey: #353535;
    --darkGrey: #1c1c1c;
  }

  * {
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: hsl(228 45% 97%);

    h1 {
	font-size: 2rem;
	font-weight: 600;
    }
    h3 {
	font-size: 1.1rem;
	font-weight: 600;
    }
    p {
	font-size: 1rem;
    }
  }
`
