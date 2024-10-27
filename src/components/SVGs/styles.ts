import styled from "styled-components";

export interface SVGProps {
  width?: string;
  height?: string;
  hoverColor?: string;
  color?: string;
}

export const SVG = styled.svg<SVGProps>`
  width: ${(props) => props.width || "2rem"};
  height: ${(props) => props.height || "2rem"};
  fill: ${(props) => props.color || props.theme.colors.white};
`;
