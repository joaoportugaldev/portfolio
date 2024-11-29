import * as S from "./styles";
import Flex from "../../layout/Flex";
import Media from "../Media";
import Github from "../SVGs/Github";
import Instagram from "../SVGs/Instagram";
import Linkedin from "../SVGs/Linkedin";
import { useTranslation } from "react-i18next";

export default function HeadLine() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <S.HeadlineContainer>
      <Flex direction="column" gap="0rem" align="start">
        <S.Title>{t("home_1")}</S.Title>
        <Flex gap="1rem">
          <S.Title>{t("home_2")}</S.Title>
          <S.Title>
            <S.Highlight heavier={true}>João Portugal</S.Highlight>
          </S.Title>
        </Flex>
      </Flex>
      <S.Subtitle>
        {t("home_3")} <S.Highlight>{t("home_4")}</S.Highlight>{" "}
        {currentLanguage === "en" && t("home_5")}
      </S.Subtitle>
      <Flex gap="0.5rem">
        <Media icon={<Linkedin />} href="https://google.com" />
        <Media icon={<Github />} href="https://google.com" />
        <Media icon={<Instagram />} href="https://google.com" />
      </Flex>
    </S.HeadlineContainer>
  );
}
