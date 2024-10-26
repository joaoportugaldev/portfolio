import styled from "styled-components";

export interface TitleProps {
  fontSize?: string;
}

export const Title = styled.h3<TitleProps>`
  font-size: ${(props) => props.theme.fontSize.bodyTitle};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

export const Dot = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: ${(props) => props.theme.colors.secundary};
  border-radius: 50%;
`;

export const Line = styled.div`
  width: 5rem;
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.secundary};
`;
