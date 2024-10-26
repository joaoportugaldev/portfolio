import * as S from "./styles";

export interface SimpleTextProps {
  fontSize?: string;
  children: any;
}

export default function SimpleText(props: SimpleTextProps) {
  return (
    <S.SimpleText fontSize={props.fontSize}>{props.children}</S.SimpleText>
  );
}
