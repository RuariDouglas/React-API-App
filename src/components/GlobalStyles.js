import { createStore } from "redux";
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
            background-color: darkred;
        }
    }
    body {
        font-family: 'montserrat', sans-serif;
        width: 100%auto;
    }
    h2 {
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: ${col.darkGrey};
    }
    h3 {
        font-size: 1.3rem;
        color: ${col.grey};
        padding: 1.5rem;
    }
    p {
        font-size: 1.2rem;
        line-height: 200%;
        color: ${col.darkGrey}
    }
    a{
        text-decoration: none;
        color: ${col.darkGrey};
    }
`;

export default GlobalStyles;
