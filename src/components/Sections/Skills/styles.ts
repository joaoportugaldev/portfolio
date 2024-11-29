import styled from "styled-components";

export interface SectionProps {
  $isSectionOpened: boolean;
}

export const Title = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  max-width: 400px;
  width: 100%;
  height: 150px;
`;

export const SkillsContainer = styled.div<SectionProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-height: ${(props) => (props.$isSectionOpened ? "auto" : "30rem")};
  overflow-y: ${(props) => (props.$isSectionOpened ? "visible" : "hidden")};
`;

export const Overlayer = styled.div<SectionProps>`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  justify-content: center;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  width: 100%;

  &::after {
    position: absolute;
    display: block;
    height: 0px;
    left: 0px;
    width: 100%;
    content: "";
    box-shadow: ${({ $isSectionOpened }) =>
      $isSectionOpened ? "none" : "rgb(15, 15, 15) 0px 1rem 5rem 5rem"};
  }
`;
