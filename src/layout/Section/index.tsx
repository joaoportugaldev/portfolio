import * as S from './styles';

export interface SectionProps {
    children: any;
}

export default function Section(props: SectionProps) {
    return (
        <S.Section>
        <S.Container>{props.children}</S.Container>
        </S.Section>
    );
}