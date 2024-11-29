import styled from "styled-components";

export const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 0.25rem;
  background-color: ${(props) => props.theme.colors.softDark};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  transition: all ease 200ms;
  z-index: 1;

  &:hover {
    box-shadow: ${(props) => `${props.theme.colors.primary} 0px 0px 4px`};
  }
`;
