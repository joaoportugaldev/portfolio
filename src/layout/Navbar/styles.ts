import styled from "styled-components";

export const Navbar = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    opacity: 1;
    background-color: ${props => props.theme.colors.dark};
    height: 5rem;
    border-bottom: 1px solid ${props => props.theme.colors.gray};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1280px;
    width: 100%;
`