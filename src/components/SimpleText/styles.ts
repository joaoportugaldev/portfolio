import styled from "styled-components";

export interface SimpleTextProps {
  fontSize?: string;
}

export const SimpleText = styled.span<SimpleTextProps>`
  font-size: ${(props) =>
    props.fontSize
      ? props.theme.fontSize[props.fontSize]
      : props.theme.fontSize.text};
  line-height: 1.5;
`;
