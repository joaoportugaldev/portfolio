import styled from "styled-components";

export const Menu = styled.ul<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: ${(props) => props.theme.colors.dark};
  position: absolute;
  width: 100%;
  top: 5rem;
  left: 0;
  gap: 1.5rem;
  list-style: none;
  color: ${(props) => props.theme.colors.white};
  padding: 12px;
  font-weight: ${(props) => props.theme.fontWeight.medium};

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    position: static;
    width: auto;
    top: auto;
  }
`;

export const HamburgerButton = styled.button`
  background-color: transparent;
  border: none;
  display: block;
  cursor: pointer;

  @media (min-width: 1024px) {
    display: none;
  }
`;
