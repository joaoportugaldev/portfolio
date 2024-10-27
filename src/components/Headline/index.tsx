import * as S from "./styles";
import Flex from "../../layout/Flex";
import Media from "../Media";
import Github from "../SVGs/Github";
import Instagram from "../SVGs/Instagram";
import Linkedin from "../SVGs/Linkedin";

export default function HeadLine() {
  return (
    <Flex
      direction="column"
      align="start"
      justify="center"
      width="50%"
      gap="1rem"
    >
      <Flex direction="column" gap="0rem" align="start">
        <S.Title>Hi, My</S.Title>
        <Flex gap="1rem">
          <S.Title>Name is</S.Title>
          <S.Title>
            <S.Highlight heavier={true}>João Portugal</S.Highlight>
          </S.Title>
        </Flex>
      </Flex>
      <S.Subtitle>
        I'm a <S.Highlight>software developer</S.Highlight> from Brazil
      </S.Subtitle>
      <Flex gap="0.5rem">
        <Media icon={<Linkedin />} href="https://google.com" />
        <Media icon={<Github />} href="https://google.com" />
        <Media icon={<Instagram />} href="https://google.com" />
      </Flex>
    </Flex>
  );
}
