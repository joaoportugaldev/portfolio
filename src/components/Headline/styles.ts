import styled from "styled-components";

export const Subtitle = styled.h2`
  font-size: ${(props) => props.theme.fontSize.title};
  font-weight: ${(props) => props.theme.fontWeight.light};
`;

export const Title = styled.span`
  font-size: ${(props) => props.theme.fontSize.bodyTitle};
  font-weight: ${(props) => props.theme.fontWeight.light};
  text-align: center;
`;

export interface HighlightProps {
  heavier?: boolean;
}

export const Highlight = styled.span<HighlightProps>`
  color: ${(props) => props.theme.colors.primary};
  text-shadow: ${(props) => `${props.theme.colors.primary} 0px 0px 4px`};
  font-weight: ${(props) => props.heavier ? props.theme.fontWeight.regular : props.theme.fontWeight.light};
`;
