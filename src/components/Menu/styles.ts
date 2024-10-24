import styled from "styled-components";

export const Menu = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    list-style: none;
    color: ${props => props.theme.colors.white};
    padding: 12px;
`