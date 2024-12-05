import styled from "styled-components";

export const ItemCarousel = styled.div`
    background-color: ${({ theme }) => theme.colors.black};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: ${(props) => `${props.theme.colors.primary} 0px 0px 4px`};
    height: 24rem;
    width: 24rem;
    padding: 2rem;
`

export const SliderContainer = styled.div`
    display: flex;
    background-color: red;
    flex-direction: row;
    width: 100%;
    gap: 1rem;
`