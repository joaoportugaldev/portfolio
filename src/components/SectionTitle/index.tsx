import Flex from "../../layout/Flex";
import * as S from "./styles";

export interface TitleProps {
  text: string;
  fontSize?: string;
  margin?: string;
}

export default function SectionTitle(props: TitleProps) {
  const { text, fontSize } = props;

  return (
    <Flex direction="column" gap="0.5rem" align="start" margin="0rem 0rem 2rem 0rem">
      <Flex justify="start" gap="0.5rem" align="baseline">
        <S.Title fontSize={fontSize}>{text}</S.Title>
        <S.Dot />
      </Flex>
      <S.Line />
    </Flex>
  );
}
