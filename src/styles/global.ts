import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';

const GlobalStyles = createGlobalStyle`
  ${fonts}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar {
      width: 4px;
      border-radius: 10px;
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: #dad7d7;
      border-radius: 10px;
    }
  }
  html {
    font-size: 10px;
  }
  html, body {
    min-height: 100%;
    height:100%;

  }
  body {
    width: 100%;
    display: block;

    background-color: ${({ theme }) => theme.colors.bg};

    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'FireRed', sans-serif;
    font-weight: 400;
    font-size: 2.2rem;
    color: ${({ theme }) => theme.colors.text};
    overflow-x: hidden;]

    input, textarea, select {
      -webkit-appearance: none;
    }
  }

  p.noResult {
    color: ${({ theme }) => theme.colors.details};
    font-size: 25px;
    margin-bottom: 31px;
  }
`;

export default GlobalStyles;
