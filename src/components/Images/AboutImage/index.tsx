import * as S from "./styles";

export interface ImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

export default function AboutImage(props: ImageProps) {
  const { src, alt, width, height } = props;
  return (
    <S.Container width={width} height={height}>
      <S.Image src={src} alt={alt} />
    </S.Container>
  );
}
