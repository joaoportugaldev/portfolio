import Section from "../../layout/Section";
import SectionTitle from "../../components/SectionTitle";

import { useTranslation } from "react-i18next";
import Carousel from "../../components/EmblaCarousel";
import projects from "../../data/projects";

export default function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <Section padding="2rem 0 2rem 0" id="projects" bgColor="softDark">
      <SectionTitle text={t("projects")} />
      <Carousel items={projects} />
    </Section>
  );
}
