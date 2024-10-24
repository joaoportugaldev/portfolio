import * as S from "./styles";

export interface ContainerProps {
    children: any;
}

export default function Container(props: ContainerProps) {
    return <S.Container>{props.children}</S.Container>
}