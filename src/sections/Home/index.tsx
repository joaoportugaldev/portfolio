import * as S from "./styles";
import HeadLine from "../../components/Headline";
import Section from "../../layout/Section";
import profile from "../../../src/assets/profile.jpg";

export default function Home() {
  return (
    <Section bgColor="softDark" id="home">
      <S.Container>
        <HeadLine />
        <S.ImageContainer>
          <S.Image src={profile} alt="Profile Picture" />
        </S.ImageContainer>
      </S.Container>
    </Section>
  );
}
