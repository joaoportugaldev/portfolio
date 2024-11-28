import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100%;
  color: ${(props) => props.theme.colors.white};
  padding-top: 5rem;
`;
