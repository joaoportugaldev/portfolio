import Section from "../../../layout/Section";
import SectionTitle from "../../SectionTitle";
import SimpleText from "../../SimpleText";
import Flex from "../../../layout/Flex";
import { useTranslation } from "react-i18next";
import * as S from "./styles";
import skills from "../../../data/skills";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <Section padding="2rem 0 3rem 0" id="skills" bgColor="softDark">
      <SectionTitle text={t("skills")} />

      <Flex direction="column" gap="2rem" width="100%">
        {skills.map((skill) => (
          <Flex gap="2rem" align="start" textAlign="start" width="100%" key={skill.title}>
            <Flex direction="column" align="start" gap="1rem" width="100%">
              <S.Title>{skill.title}</S.Title>
              <SimpleText fontSize="largeText" maxWidth="900px">
                {t(skill.description)}
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
