import * as S from "./styles";
import brazil from "../../assets/brazil_icon.svg";
import usa from "../../assets/usa_icon.svg";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Language() {
  const [isLanguageDefault, setLanguageDefault] = useState(true);
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    setLanguageDefault(!isLanguageDefault);
    i18n.changeLanguage(lng);
  };

  return (
    <S.Language
      src={isLanguageDefault ? brazil : usa}
      $isLanguageDefault={isLanguageDefault}
      onClick={() => changeLanguage(isLanguageDefault ? "pt" : "en")}
    />
  );
}
