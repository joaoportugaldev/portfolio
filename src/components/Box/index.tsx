import { useTranslation } from "react-i18next";
import Flex from "../../layout/Flex";
import SimpleText from "../SimpleText";
import * as S from "./styles";

export interface BoxProps {
  title: string;
  description: string;
  link: string;
  start: string;
  end: string;
}

export default function Box({ title, description, start, end, link }: BoxProps) {
  const { t } = useTranslation();

  return (
    <S.Box>
      <S.Title>{title}</S.Title>
      <SimpleText>{t(description)}</SimpleText>
      <Flex justify="space-between" width="100%">
        <S.Date>
          {start} - {end}
        </S.Date>
        <S.Link href={link} target="_blank">Linkedin</S.Link>
      </Flex>
    </S.Box>
  );
}
