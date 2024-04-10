import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto Condensed", sans-serif;
    text-decoration: none;
    font-size: 14px;
    @media (min-width: 700px ) {
        font-size: 18px;
    }
    @media (min-width: 1020px ) {
        font-size: 20px;
    }
}
body{
    overflow-x: hidden;
    &::-webkit-scrollbar {
    width: 6px;
}

&::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    width: 6px;
}

&::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
    border-radius: 100px;
    width: 6px;
}
}

`;
