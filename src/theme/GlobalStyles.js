import { createGlobalStyle } from "styled-components";
import { background } from ".";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
    }
    
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        padding: 0px;
        height: 100%;
        background: ${background};
    }

    #root {
        height: 100%;
    }
`