import styled from "styled-components";

export const Logo = styled.h1`
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 0.5rem;
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

export const Image = styled.img`
  height: 3.125rem;
  width: 3.125rem;
  object-fit: contain;
`