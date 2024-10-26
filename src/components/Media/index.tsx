import * as S from "./styles";

export interface BoxProps {
  icon: string;
  href: string;
  alt: string;
}

export default function Media(props: BoxProps) {
  return (
    <S.Link href={props.href}>
      <S.Image src={props.icon} alt={props.alt} />
    </S.Link>
  );
}
