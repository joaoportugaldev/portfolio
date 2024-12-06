import "../../components/EmblaCarousel/embla.css";
import { EmblaOptionsType } from "embla-carousel";
import { useTranslation } from "react-i18next";
import Section from "../../layout/Section";
import SectionTitle from "../../components/SectionTitle";
import EmblaCarousel from "../../components/EmblaCarousel/EmblaCarousel";
import projects from "../../data/projects";

const OPTIONS: EmblaOptionsType = { loop: true };

export default function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <Section padding="1rem 0 2rem 0" id="projects" bgColor="softDark">
      <SectionTitle text={t("projects")} />
      <EmblaCarousel slides={projects} options={OPTIONS} />
    </Section>
  );
}

