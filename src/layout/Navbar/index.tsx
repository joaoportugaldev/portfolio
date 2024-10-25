import * as S from "./styles";

export interface NavbarProps {
  children?: any;
}

export default function Navbar(props: NavbarProps) {
  return (
    <S.Navbar>
      <S.Container>{props.children}</S.Container>
    </S.Navbar>
  );
}
