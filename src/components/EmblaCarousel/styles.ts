import styled from "styled-components";

export interface ProjectStatusProps {
  finished: boolean;
}

const handleColor = (finished: boolean, theme: any) => {
  return finished ? theme.colors.green : theme.colors.secundary;
};

export const ProjectStatus = styled.span<ProjectStatusProps>`
  color: ${({ theme, finished }) => handleColor(finished, theme)};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  border: 1px solid ${({ finished, theme }) => handleColor(finished, theme)};
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
`;
