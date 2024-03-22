import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
font-family: "Roboto Condensed", sans-serif;
text-decoration: none;
@media (min-width: 700px ) {
    font-size: 24px;
}
}

`;
