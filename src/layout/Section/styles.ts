import styled from "styled-components";

export interface SectionProps {
  height?: string;
}

export const Section = styled.section<SectionProps>`
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${(props) => props.height ?? "auto"};

`;

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
`;
