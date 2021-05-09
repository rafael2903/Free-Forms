import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Oxygen','Montserrat', 'Roboto', 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    
    html, body, div#root, div.App {
        min-height: 100vh;
    }

    div.App {
        display: flex;
        flex-direction: column;
    }

    p {
        margin-bottom: 0;
    }

    .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    line-height: normal;
}

`;

export default GlobalStyle;
