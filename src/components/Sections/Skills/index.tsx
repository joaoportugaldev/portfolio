import Section from "../../../layout/Section";
import SectionTitle from "../../SectionTitle";
import SimpleText from "../../SimpleText";
import Flex from "../../../layout/Flex";
import { useTranslation } from "react-i18next";
import * as S from "./styles";
import next_js from "../../../assets/next_js_logo.svg";
import react_js from "../../../assets/react_js_logo.svg";
import ts_logo from "../../../assets/ts_logo.svg";
import node_js_logo from "../../../assets/node_js_logo.svg";

export default function Skills() {
  const { t } = useTranslation();
  const skills = [
    {
      title: "Next JS",
      description: t("next_js_description"),
      image: next_js,
    },
    {
      title: "React JS",
      description: t("react_js_description"),
      image: react_js,
    },
    {
      title: "Typescript",
      description: t("typescript_description"),
      image: ts_logo,
    },
    {
      title: "Node JS",
      description: t("node_js_description"),
      image: node_js_logo,
    },
    {
      title: "Tailwind CSS",
      description: t("tailwind_css_description"),
      image: next_js,
    },
    {
      title: "Styled Components",
      description: t("styled_components_description"),
      image: next_js,
    },
    {
      title: "Sass",
      description: t("sass_description"),
      image: next_js,
    },
    {
      title: "PostgresSQL",
      description: t("postgresql_description"),
      image: next_js,
    },
    {
      title: "Ubidots",
      description: t("ubidots_description"),
      image: next_js,
    },
  ];

  return (
    <Section padding="2rem 0 2rem 0" id="skills" bgColor="softDark" >
      <SectionTitle text={t("skills")} />

      <Flex direction="column" gap="2rem" width="100%">
        {skills.map((skill) => (
          <Flex gap="2rem" align="start" textAlign="start" width="100%" >
            <Flex direction="column" align="start" gap="1rem" width="100%">
              <S.Title>{skill.title}</S.Title>
              <SimpleText fontSize="largeText" maxWidth="900px">
                {skill.description}
              </SimpleText>
            </Flex>
            <S.ImageContainer>
              <img src={skill.image} alt={skill.title} />
            </S.ImageContainer>
          </Flex>
        ))}
      </Flex>
    </Section>
  );
}
