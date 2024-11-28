import styled from "styled-components";

export interface FlexProps {
  $direction?: string;
  $justify?: string;
  $align?: string;
  $wrap?: string;
  $gap?: string;
  $width?: string;
  $height?: string;
  $margin?: string;
  $textAlign?: string;
  $position?: string;
  $top?: string;
  $left?: string;
  $right?: string;
  $bottom?: string;
  $backgroundColor?: string;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props: FlexProps) => props.$direction ?? "row"};
  justify-content: ${(props: FlexProps) => props.$justify ?? "center"};
  align-items: ${(props: FlexProps) => props.$align ?? "center"};
  flex-wrap: ${(props: FlexProps) => props.$wrap ?? "nowrap"};
  gap: ${(props: FlexProps) => props.$gap ?? "0"};
  width: ${(props: FlexProps) => props.$width ?? "auto"};
  height: ${(props: FlexProps) => props.$height ?? "auto"};
  margin: ${(props) => props.$margin ?? "0"};
  text-align: ${(props) => props.$textAlign ?? "auto"};
  position: ${(props) => props.$position ?? "static"};
  top: ${(props) => props.$top ?? "auto"};
  left: ${(props) => props.$left ?? "auto"};
  right: ${(props) => props.$right ?? "auto"};
  bottom: ${(props) => props.$bottom ?? "auto"};
  background-color: ${(props) => props.$backgroundColor ?? "transparent"};
`;
