import styled from "styled-components";

export const LinkButton = styled.a`
    text-decoration: none;
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontSize.largeText};
    letter-spacing: 0.1rem;
    
    &:hover {
        color: ${props => props.theme.colors.primary};
    }
`