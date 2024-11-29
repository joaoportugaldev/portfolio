import styled from "styled-components";

export interface SectionProps {
  $height?: string;
  $bgColor?: string;
  $padding?: string;
  $position?: string;
}

export const Section = styled.section<SectionProps>`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: ${(props) => props.$padding ?? "0"};
  height: ${(props) => props.$height ?? "auto"};
  background-color: ${(props) =>
    props.$bgColor
      ? props.theme.colors[props.$bgColor]
      : props.theme.colors.dark};
  scroll-margin-top: 5rem;
  position: ${(props) => props.$position ?? "static"};
`;

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
`;
