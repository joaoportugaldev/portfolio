import Section from "../../layout/Section";
import SectionTitle from "../../components/SectionTitle";
import SimpleText from "../../components/SimpleText";
import about_me from "../../../src/assets/about_me.jpg";
import * as S from "./styles";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <Section padding="2rem 0 3rem 0" id="about">
      <SectionTitle text={t("about_me")} />
      <S.Container>
        <S.ImageContainer>
          <S.Image src={about_me} alt={"A photo of mine playing the violin"} />
        </S.ImageContainer>
        <SimpleText fontSize="largeText" maxWidth="900px">
          {t("about_me_paragraph_1")}
          <br />
          <br />
          {t("about_me_paragraph_2")}
          pattern.
          <br />
          <br />
          {t("about_me_paragraph_3")}
        </SimpleText>
      </S.Container>
    </Section>
  );
}
