import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  width: 100%;
  opacity: 1;
  background-color: ${(props) => props.theme.colors.dark};
  height: 5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  width: 100%;
  padding: 0 1rem;

  @media (min-width: 1280px) {
    padding: 0;
  }
`;
