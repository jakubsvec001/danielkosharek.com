import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.primary};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    ${'' /* min-width: 200px; */}
  }

  h1 {
    font-family: 'EB Garamond', serif;
    font-size: 2rem;
    font-weight: 300;
  }

  h2 {
    font-size: 1.75rem;
    font-weight: 200;
    margin: .75em 0 .5em 0;
  }

  h3 {
    font-size: 1rem;
    font-weight: 200;
    margin: .75em 0 .5em 0;
  }

  img {
    height: auto;
    width: 10rem;
  }

  a {
    ${'' /* color: ${({ theme }) => theme.primaryHover}; */}
    text-decoration: none;
  }

  .disabled-link {
    pointer-events: none;
  }
`;
