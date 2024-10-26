import * as S from "./styles";

export interface SectionProps {
  height?: string;
  children: any;
}

export default function Section(props: SectionProps) {
  return (
    <S.Section height={props.height}>
      <S.Container>{props.children}</S.Container>
    </S.Section>
  );
}
