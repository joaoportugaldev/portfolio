import Flex from "../../layout/Flex";
import SimpleText from "../SimpleText";
import * as S from "./styles";

export interface BoxProps {
  title: string;
  description: string;
  start: string;
  end: string;
}

export default function Box({ title, description, start, end }: BoxProps) {
  return (
    <S.Box>
      <S.Title>{title}</S.Title>
      <SimpleText>{description}</SimpleText>
      <Flex justify="space-between" width="100%">
        <S.Date>
          {start} - {end}
        </S.Date>
        <S.Link href="./" >Linkedin</S.Link>
      </Flex>
    </S.Box>
  );
}
