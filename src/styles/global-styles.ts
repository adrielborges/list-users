import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
      --red: #E52E4D;
      --green: #33CC95;
      --blue: #5429CC;
      --blue-light: #6933FF;
      --text-title: #363F5F;
      --text-body: #969CB3;
      --background: #0A0C17;
      --background-edge: #0B0F30;
      --white: #FFFFFF;
      font-size: 16px;
    }

    * {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
       outline: none;
    }

    html {
        color: var(--white);
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background:var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
`;
