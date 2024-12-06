import * as S from "./styles";
import logo_jp_dev from "../../assets/logo_jp_dev.svg";

export default function Logo() {
  return (
    <S.Logo>
      <S.Image src={logo_jp_dev} alt="Logo João Portugal Dev" />
      <span>JP DEV</span>
    </S.Logo>
  );
}
