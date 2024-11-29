import { useTranslation } from "react-i18next";
import LinkButton from "../LinkButton";
import * as S from "./styles";

export default function Menu() {
  const { t } = useTranslation();

  const renderizarItem = (anchor: string, text: string) => {
    return <LinkButton href={anchor}>{text}</LinkButton>;
  };

  return (
    <S.Menu>
      {renderizarItem("#home", t("home"))}
      {renderizarItem("#about", t("about_me"))}
      {renderizarItem("#skills", t("skills"))}
      {renderizarItem("#experience", t("experience"))}
      {renderizarItem("#projets", t("projects"))}
      {renderizarItem("#certificates", t("certificates"))}
      {renderizarItem("#contact", t("contact"))}
    </S.Menu>
  );
}
