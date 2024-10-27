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
  textAlign?: string;
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
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
    textAlign,
    position,
    top,
    left,
    right,
    bottom
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
      textAlign={textAlign}
      position={position}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
    >
      {children}
    </S.Flex>
  );
}
