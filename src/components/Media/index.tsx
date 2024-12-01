import * as S from "./styles";

export interface BoxProps {
  icon: JSX.Element;
  href: string;
}

export default function Media(props: BoxProps) {
  return (
    <S.Link href={props.href} target="_blank">
      {props.icon}
    </S.Link>
  );
}

