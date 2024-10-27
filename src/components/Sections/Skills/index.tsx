import Section from "../../../layout/Section";
import SectionTitle from "../../SectionTitle";
import SimpleText from "../../SimpleText";
import Flex from "../../../layout/Flex";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <Section padding="2rem 0 2rem 0" id="skills">
      <SectionTitle text={t("skills")} />
      <Flex gap="2rem" align="center" textAlign="start">
        <Flex>
          <h2>Next JS</h2>
          <SimpleText fontSize="largeText" maxWidth="900px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            voluptate alias ipsum saepe sed minima fugiat, mollitia aliquam
            magnam ratione, odio deleniti? Excepturi praesentium asperiores
            ipsam maxime debitis sunt neque?
          </SimpleText>
        </Flex>
        <div style={{backgroundColor: "gray", width: "400px", height: "150px"}}></div>
      </Flex>
    </Section>
  );
}
