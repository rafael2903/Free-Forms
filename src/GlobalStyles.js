import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    
    html, body, div#root, div.App {
        min-height: 100vh;
    }

`;

export default GlobalStyle;
