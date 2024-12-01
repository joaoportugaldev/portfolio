import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.25rem;
  width: 100%;
`;

export const Title = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
`;

export const Date = styled.span`
    font-size: ${({ theme }) => theme.fontSize.largeText};
    color: ${({ theme }) => theme.colors.white};
`;

export const Link = styled.a`
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSize.largeText};
    color: ${({ theme }) => theme.colors.primary};
`
