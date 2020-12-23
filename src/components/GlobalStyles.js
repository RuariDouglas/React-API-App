import { createGlobalStyle } from "styled-components";
import { col } from "../Styles/variables";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        &::-webkit-scrollbar{
            width: .5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: ${col.primary};
        }
        &::-webkit-scrollbar-track {
            background-color: transparent;
        }
    }
    body {
        font-family: 'Ubuntu Mono', monospace;
        width: 100%;
        background-color: ${col.dark}
    }
    h1 {
        font-family: 'Press Start 2P', cursive;
    }
    h2 {
        font-size: 3rem;
        font-family: 'Press Start 2P', cursive;
        font-weight: lighter;
        color: ${col.light};
    }
    h3 {
        font-size: 1.8rem;
        padding: 1rem 0;
        color: ${col.light};
    }
    p {
        font-size: 1.3rem;
        line-height: 200%;
        color: ${col.dark}
    }
    a{
        text-decoration: none;
        color: ${col.accent};
    }
    img {
        display: block;
    }
    input {
        font-weight: bold;
        outline: none;
        font-family: 'Ubuntu Mono', monospace;
    }
`;

export default GlobalStyles;
