import * as S from './styles';

export interface NavbarProps {
  children?: any;
}

export default function Navbar(props: NavbarProps) {
  return <S.Navbar>{props.children}</S.Navbar>;
}
