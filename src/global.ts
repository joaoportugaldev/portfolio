import { createGlobalStyle } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GlobalStyle = createGlobalStyle`
* {
    font-family: "Quicksand", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    background-color: ${(props) => props.theme.colors.dark};
    color: ${(props) => props.theme.colors.white};
}
`;

export default GlobalStyle;
