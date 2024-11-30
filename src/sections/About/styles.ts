import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  text-align: start;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  object-fit: cover;
  object-position: 100% 30%;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 24rem;
`;
