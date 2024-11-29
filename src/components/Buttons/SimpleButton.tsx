import * as S from "./styles";

export interface SimpleButtonProps {
  text: string;
  onClick: () => void;
}

export default function SimpleButton({ text, onClick }: SimpleButtonProps) {
  return <S.Button onClick={onClick}>{text}</S.Button>;
}
