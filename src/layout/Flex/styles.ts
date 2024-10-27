import styled from "styled-components";

export interface FlexProps {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  gap?: string;
  width?: string;
  height?: string;
  margin?: string;
  textAlign?: string;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props: FlexProps) => props.direction ?? "row"};
  justify-content: ${(props: FlexProps) => props.justify ?? "center"};
  align-items: ${(props: FlexProps) => props.align ?? "center"};
  flex-wrap: ${(props: FlexProps) => props.wrap ?? "nowrap"};
  gap: ${(props: FlexProps) => props.gap ?? "0"};
  width: ${(props: FlexProps) => props.width ?? "auto"};
  height: ${(props: FlexProps) => props.height ?? "auto"};
  margin: ${props => props.margin ?? "0"};
  text-align: ${props => props.textAlign ?? "auto"};
`;
