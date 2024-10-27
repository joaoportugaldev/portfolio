import * as S from "./styles";

export interface SimpleTextProps {
  fontSize?: string;
  maxWidth?: string;
  children: any;
}

export default function SimpleText(props: SimpleTextProps) {
  const { fontSize, maxWidth, children } = props;
  return (
    <S.SimpleText fontSize={fontSize} maxWidth={maxWidth}>
      {children}
    </S.SimpleText>
  );
}
