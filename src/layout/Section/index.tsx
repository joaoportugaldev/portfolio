import * as S from "./styles";

export interface SectionProps {
  height?: string;
  bgColor?: string;
  padding?: string;
  children: any;
  id: string;
}

export default function Section(props: SectionProps) {
  const { height, bgColor, children, padding, id } = props;
  return (
    <S.Section height={height} bgColor={bgColor} padding={padding} id={id}>
      <S.Container>{children}</S.Container>
    </S.Section>
  );
}
