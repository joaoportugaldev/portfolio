import Image from "../../../layout/Image";
import Section from "../../../layout/Section";
import SectionTitle from "../../SectionTitle";
import SimpleText from "../../SimpleText";
import about_me from "../../../assets/about_me.jpg";
import Flex from "../../../layout/Flex";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <Section padding="2rem 0 3rem 0" id="about">
      <SectionTitle text={t("about_me")} />
      <Flex gap="2rem" align="center" textAlign="start">
        <Image
          src={about_me}
          alt="A photo of mine holding a violin"
          height="24rem"
        />
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
      </Flex>
    </Section>
  );
}
