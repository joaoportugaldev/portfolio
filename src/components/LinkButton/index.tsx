import * as S from './styles'

export interface LinkButtonProps {
    href: string
    children?: any;
    initialColor?: string;
}

export default function LinkButton(props: LinkButtonProps) {
    return (
        <li key={props.href}>
            <S.LinkButton href={props.href} initialColor={props.initialColor}>{props.children}</S.LinkButton>
        </li>
    )
}