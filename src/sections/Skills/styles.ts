import styled from "styled-components";

export interface SectionProps {
  $isSectionOpened: boolean;
}

export const Title = styled.h2`
  text-align: center;
  width: 100%;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};

  @media (min-width: 768px) {
    text-align: start;
  }
`;

export const ImageContainer = styled.div`
  display: none;
  
  @media (min-width: 768px) {
    display: flex;
    align-items: start;
    justify-content: center;
    max-width: 400px;
    width: 100%;
    height: 150px;
  }
`;

export const SkillsContainer = styled.div<SectionProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-height: ${(props) => (props.$isSectionOpened ? "auto" : "67vh")};
  overflow-y: ${(props) => (props.$isSectionOpened ? "visible" : "hidden")};
  padding-bottom: ${({ $isSectionOpened }) =>
    $isSectionOpened ? "4rem" : "0"};
`;

export const Overlayer = styled.div<SectionProps>`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  justify-content: center;

  width: 100%;

  &::after {
    position: absolute;
    display: block;
    height: 0px;
    left: 0px;
    width: 100%;
    content: "";
    box-shadow: ${({ $isSectionOpened }) =>
      $isSectionOpened ? "none" : "rgb(15, 15, 15) 0 0 5rem 5rem"};
  }
`;

export const Text = styled.p`
  font-size: 1.2rem;
  max-width: 900px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: start;
  }
`;
