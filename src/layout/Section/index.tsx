import * as S from "./styles";

export interface SectionProps {
  height?: string;
  bgColor?: string;
  padding?: string;
  position?: string;
  children: any;
  id: string;
}

export default function Section(props: SectionProps) {
  const { height, bgColor, children, padding, id, position } = props;
  return (
    <S.Section
      $height={height}
      $bgColor={bgColor}
      $padding={padding}
      $position={position}
      id={id}

    >
      <S.Container>{children}</S.Container>
    </S.Section>
  );
}
