import styled from "styled-components";

export interface LanguageProps {
  $isLanguageDefault: boolean;
}

export const Language = styled.img<LanguageProps>`
  position: static;
  top: 1.6rem;
  right: 2rem;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.$isLanguageDefault
      ? `${props.theme.colors.green} 0px 0px 12px`
      : `${props.theme.colors.red} 0px 0px 12px`};

    @media (min-width: 1536px) {
      position: absolute;
    }
`;
