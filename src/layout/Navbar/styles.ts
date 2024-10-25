import styled from "styled-components";

export const Navbar = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${props => props.theme.colors.dark};
    height: 4rem;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
`