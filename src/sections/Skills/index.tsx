import Section from "../../layout/Section";
import SectionTitle from "../../components/SectionTitle";
import SimpleText from "../../components/SimpleText";
import Flex from "../../layout/Flex";
import { useTranslation } from "react-i18next";
import * as S from "./styles";
import skills from "../../data/skills";
import { useState } from "react";
import SimpleButton from "../../components/Buttons/SimpleButton";

export default function Skills() {
  const { t } = useTranslation();
  const [isSectionOpened, setIsSectionOpened] = useState(false);

  const toggleSection = () => {
    setIsSectionOpened((prevState) => !prevState);
  };

  return (
    <Section
      padding="2rem 0 2rem 0"
      id="skills"
      bgColor="softDark"
      position="relative"
    >
      <SectionTitle text={t("skills")} />

      <S.SkillsContainer $isSectionOpened={isSectionOpened}>
        {skills.map((skill) => (
          <Flex
            gap="2rem"
            align="start"
            textAlign="start"
            width="100%"
            key={skill.title}
          >
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
        <S.Overlayer $isSectionOpened={isSectionOpened}>
          <SimpleButton
            text={isSectionOpened ? t("see_less") : t("see_more")}
            onClick={toggleSection}
          />
        </S.Overlayer>
      </S.SkillsContainer>
    </Section>
  );
}
