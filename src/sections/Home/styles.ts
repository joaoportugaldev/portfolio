import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  height: 100vh;
  width: 100%;
  color: ${(props) => props.theme.colors.white};
  padding-top: 5rem;
  z-index: 0;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (min-width: 1024px) {
    /* justify-content: space-between;
    align-items: center; */
  }
`;

export interface ImageContainerProps {
  width?: string;
  height?: string;
}

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  object-fit: cover;
  /* object-position: top 50px bottom 0px; */

  @media (min-width: 1024px) {

  }
  
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  display: none;
  width: 40%;
  height: 20rem;
  border-radius: 1rem;

  @media (min-width: 768px) {
    display: block;
  }

  @media (min-width: 1024px) {
    width: 40%;
    height: 30rem;
  }
`;
