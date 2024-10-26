import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(100vh - 5rem);
  width: 100%;
  color: ${(props) => props.theme.colors.white};
`;
