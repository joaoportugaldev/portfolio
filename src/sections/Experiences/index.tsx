import { useTranslation } from "react-i18next";
import SectionTitle from "../../components/SectionTitle";
import Section from "../../layout/Section";
import Box from "../../components/Box";
import Flex from "../../layout/Flex";
import experiencesList from "../../data/experiences";

export default function Experiences() {
  const { t } = useTranslation();

  return (
    <Section id="experiences" padding="1rem 0 2rem 0">
      <SectionTitle text={t("experiences")} />
      <Flex direction="column" gap="1rem">
        {experiencesList.map((e) => {
          return (
            <Box
              key={e.title}
              title={e.title}
              description={e.description}
              start={e.start}
              end={e.end}
            />
          );
        })}
      </Flex>
    </Section>
  );
}
