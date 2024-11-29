import * as S from "./styles";
import HeadLine from "../../components/Headline";
import Image from "../../layout/Image";
import Section from "../../layout/Section";
import profile from "../../../src/assets/profile.jpg";

export default function Home() {
  return (
    <Section bgColor="softDark" id="home">
      <S.Container>
        <HeadLine />
        <Image
          src={profile}
          alt="Profile Picture"
          height="30rem"
          width="40%"
        />
      </S.Container>
    </Section>
  );
}
