import styled from "styled-components";

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
`
