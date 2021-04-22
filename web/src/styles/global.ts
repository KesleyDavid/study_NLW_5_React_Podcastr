import { createGlobalStyle } from 'styled-components';
import media from 'styled-query';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #FFF;

    --gray-50: #F7F8FA;
    --gray-100: #E6E8EB;
    --gray-200: #AFB2B1;
    --gray-500: #808080;
    --gray-800: #494D4B;

    --green-500: #04D361;
    
    --purple-300: #9F75FF;
    --purple-400: #9164FA; 
    --purple-500: #8257E5;
    --purple-800: #6F48C9;
  }

  html {
    ${media.lessThan('1080px')`
      font-size: 93.75%;
      // default: 16px
      // 16 x 0.9375 = 15px
    `}
    ${media.lessThan('720px')`
      font-size: 87.5%;
    `}
  }

  body {
    background: var(--gray-50);
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, textarea, button {
    font: 500 1rem Inter, sans-serif;
    color: var(--gray-500);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    font-family: Lexend, sans-serif;
    color: var(--gray-800);
  }

  h1 {
    font-size: 2rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }
`;