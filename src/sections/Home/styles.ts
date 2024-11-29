import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  height: 100vh;
  width: 100%;
  color: ${(props) => props.theme.colors.white};
  padding-top: 5rem;
  background-image: url("../../../src/assets/profile.jpg");
  background-size: cover;
  background-position: center;
  /* margin-top: 5rem; */
  z-index: 0;

  @media (min-width: 1024px) {
    position: static;
    background-image: none;
    justify-content: space-between;
    align-items: center;
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
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    width: 40%;
    height: 30rem;
  }
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
  z-index: 1;
`;
