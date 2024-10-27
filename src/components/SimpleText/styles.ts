import styled from "styled-components";

export interface SimpleTextProps {
  fontSize?: string;
  maxWidth?: string;
}

export const SimpleText = styled.span<SimpleTextProps>`
  font-size: ${(props) =>
    props.fontSize
      ? props.theme.fontSize[props.fontSize]
      : props.theme.fontSize.text};
  line-height: 1.5;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "auto")};
`;
