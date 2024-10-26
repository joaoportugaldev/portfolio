import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    font-family: "Quicksand", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: ${(props) => props.theme.colors.dark};
}
`;

export default GlobalStyle;
