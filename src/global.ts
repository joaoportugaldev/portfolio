import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    font-family: "Quicksand", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    transition: .3s ease;
}

body {
    background-color: ${(props) => props.theme.colors.dark};
    color: ${(props) => props.theme.colors.white};
}
`;

export default GlobalStyle;
