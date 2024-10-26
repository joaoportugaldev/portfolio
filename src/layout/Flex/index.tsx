import * as S from "./styles";

export interface FlexProps {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  children?: any;
  gap?: string;
  width?: string;
  height?: string;
  margin?: string;
}

export default function Flex(props: FlexProps) {
  const {
    align,
    children,
    direction,
    justify,
    wrap,
    gap,
    width,
    height,
    margin,
  } = props;

  return (
    <S.Flex
      direction={direction}
      align={align}
      justify={justify}
      wrap={wrap}
      gap={gap}
      width={width}
      height={height}
      margin={margin}
    >
      {children}
    </S.Flex>
  );
}
