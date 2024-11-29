import { useTranslation } from "react-i18next";
import LinkButton from "../LinkButton";
import * as S from "./styles";
import { useState } from "react";
import { IconMenu2 } from "@tabler/icons-react";
import Language from "../Language";

export default function Menu() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const renderizarItem = (anchor: string, text: string) => {
    return <LinkButton href={anchor}>{text}</LinkButton>;
  };

  return (
    <>
      <S.Menu isOpen={isMenuOpen}>
        {renderizarItem("#home", t("home"))}
        {renderizarItem("#about", t("about_me"))}
        {renderizarItem("#skills", t("skills"))}
        {renderizarItem("#experience", t("experience"))}
        {renderizarItem("#projets", t("projects"))}
        {renderizarItem("#certificates", t("certificates"))}
        {renderizarItem("#contact", t("contact"))}
        <Language />
      </S.Menu>

      <S.HamburgerButton onClick={toggleMenu}>
        <IconMenu2 color="white" width={40} height={40} />
      </S.HamburgerButton>
    </>
  );
}
