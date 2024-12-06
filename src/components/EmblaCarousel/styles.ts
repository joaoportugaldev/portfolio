import styled from "styled-components";

export interface ProjectStatusProps {
  status: string;
}

const handleColor = (status: string, theme: any) => {
  if (status === "project_status_in_progress") {
    return theme.colors.secundary;
  }
  if (status === "project_status_finished") {
    return theme.colors.green;
  }
  return theme.colors.white;
};

export const ProjectStatus = styled.span<ProjectStatusProps>`
  color: ${({ theme, status }) => handleColor(status, theme)};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  border: 1px solid ${({ status, theme }) => handleColor(status, theme)};
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
`;
