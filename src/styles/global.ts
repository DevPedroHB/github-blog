import { createGlobalStyle } from "styled-components";
import firaCode from "../assets/fonts/FiraCode-Regular.woff";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'FiraCode';
    src: url(${firaCode}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors["brand-blue"]};
    }

    ::-webkit-scrollbar {
      width: 0.4rem;
      height: 0.4rem;
      background-color: ${({ theme }) => theme.colors["base-profile"]};
      border-radius: 6px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors["brand-blue"]};
      border-radius: 6px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: ${({ theme }) => theme.colors["base-span"]};
    }
  }

  body {
    background: ${({ theme }) => theme.colors["base-background"]};
    color: ${({ theme }) => theme.colors["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 ${({ theme }) =>
      theme.textSizes["text-text-m"]} 'Nunito', sans-serif;
      line-height: 160%;
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    html {
      font-size: 97.5%;
    }
  }

  @media screen and (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`;
