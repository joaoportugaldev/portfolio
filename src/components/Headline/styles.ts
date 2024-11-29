import styled from "styled-components";

export const HeadlineContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  height: 100%;
  gap: 1rem;
  
  z-index: 3;

  @media (min-width: 1024px) {
    position: static;
    justify-content: center;
    width: 50%;
    height: auto;
    padding: 0;
  }
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: ${(props) => props.theme.fontWeight.light};

  @media (min-width: 1280px) {
    font-size: ${(props) => props.theme.fontSize.title};
  }
`;

export const Title = styled.span`
  font-size: 3rem;
  font-weight: ${(props) => props.theme.fontWeight.light};
  text-align: center;
  white-space: nowrap;

  @media (min-width: 1280px) {
    font-size: ${(props) => props.theme.fontSize.bodyTitle};
  }
`;

export interface HighlightProps {
  heavier?: boolean;
}

export const Highlight = styled.span<HighlightProps>`
  color: ${(props) => props.theme.colors.primary};
  text-shadow: ${(props) => `${props.theme.colors.primary} 0px 0px 4px`};
  font-weight: ${(props) =>
    props.heavier
      ? props.theme.fontWeight.regular
      : props.theme.fontWeight.light};
`;
