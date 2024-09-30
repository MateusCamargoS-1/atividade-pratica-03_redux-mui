import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        color: #333;
        text-decoration: none;
    }
`;

export default GlobalStyled;