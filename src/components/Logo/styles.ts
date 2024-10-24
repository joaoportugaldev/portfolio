import styled from "styled-components";

export const Logo = styled.h1`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 3.125rem;
  font-size: ${(props) => props.theme.fontSize.title};
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  white-space: nowrap;
`;

export const LogoDetail = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSize.title};
`;