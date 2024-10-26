import * as S from "./styles";
import Flex from "../../layout/Flex";
import Github from "../Media/Github";
import Instagram from "../Media/Instagram";
import Linkedin from "../Media/Linkedin";

export default function HeadLine() {
  return (
    <Flex
      direction="column"
      align="start"
      justify="center"
      width="50%"
      gap="1rem"
    >
      <Flex direction="column" gap="0.5rem" align="start">
        <S.Title>Hi, My</S.Title>
        <Flex gap="1rem">
          <S.Title>Name is</S.Title>
          <S.Title>
            <S.Highlight heavier={true}>João Portugal</S.Highlight>
          </S.Title>
        </Flex>
        <S.Subtitle>
          I'm a <S.Highlight>software developer</S.Highlight> from Brazil
        </S.Subtitle>
      </Flex>

      <Flex gap="0.5rem">
        <Linkedin />
        <Github />
        <Instagram />
      </Flex>
    </Flex>
  );
}
