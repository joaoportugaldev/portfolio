import styled from "styled-components";

export interface ContainerProps {
  width?: string;
  height?: string;
}

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  object-fit: cover;
`;

export const Container = styled.div<ContainerProps>`
  width: ${(props) => props.width ?? "100%"};
  height: ${(props) => props.height ?? "100%"};
`;