import styled from "styled-components";

export interface MediaProps {
  hoverBgColor?: string;
  hoverColor?: string;
}

export const Link = styled.a<MediaProps>`
  padding: 0.6rem;
  background-color: ${(props) => props.hoverBgColor ?? props.theme.colors.gray};
  border-radius: 0.5rem;
  
  &:hover svg {
    fill: ${(props) => props.hoverColor ?? props.theme.colors.primary};
    transition: fill 350ms;
  }
`;
