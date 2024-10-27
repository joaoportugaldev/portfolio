import styled from "styled-components";

export const LinkButton = styled.a`
  position: relative;
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSize.largeText};
  letter-spacing: 0.1rem;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    transition: color 350ms ease;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: -7px;
    left: 0px;
    background: ${(props) => `linear-gradient(
      270deg,
      ${props.theme.colors.primary} 0%,
      ${props.theme.colors.softPrimary} 100%
    )`};
    transform-origin: right bottom;
    transition: transform 0.5s cubic-bezier(0.86, 0, 0.07, 1);
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left bottom;
  }
`;
