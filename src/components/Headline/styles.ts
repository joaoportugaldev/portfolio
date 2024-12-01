import styled from "styled-components";
import profileImage from "../../../src/assets/profile.jpg";

export const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  padding: 0 1rem 1rem 1rem;
  gap: 1rem;
  z-index: 3;
  background-image: url(${profileImage});
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;

  @media (min-width: 768px) {
    justify-content: center;
    position: static;
    background-image: none;
    height: auto;
    padding: 0;
  }
  
  @media (min-width: 1024px) {
    position: static;
    justify-content: center;
    width: 50%;
    
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: ${(props) => props.theme.fontWeight.light};
  
  @media (min-width: 640px) {
    font-size: 2rem;
  }

  @media (min-width: 1280px) {
    font-size: ${(props) => props.theme.fontSize.title};
  }
`;

export const Title = styled.span`
  font-size: 2rem;
  font-weight: ${(props) => props.theme.fontWeight.light};
  text-align: center;
  white-space: nowrap;

  @media (min-width: 640px) {
    font-size: 3rem;
  }

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

export const Overlayer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  justify-content: center;
  background: linear-gradient(transparent, rgb(15, 15, 15));
  z-index: -1;

  @media (min-width: 768px) {
    display: none;
  }
`;
