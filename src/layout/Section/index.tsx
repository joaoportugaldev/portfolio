import * as S from "./styles";

export interface SectionProps {
  height?: string;
  bgColor?: string;
  padding?: string;
  children: any;
}

export default function Section(props: SectionProps) {
  const { height, bgColor, children, padding } = props;
  return (
    <S.Section height={height} bgColor={bgColor} padding={padding}>
      <S.Container>{children}</S.Container>
    </S.Section>
  );
}
