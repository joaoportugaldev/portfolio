import * as S from "./styles";
import HeadLine from "../../Headline";
import Image from "../../../layout/Image";
import Section from "../../../layout/Section";
import profile from "../../../assets/profile.jpg";

export default function Home() {
  return (
    <Section bgColor="softDark">
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
