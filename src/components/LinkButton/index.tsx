import * as S from './styles'

export interface LinkButtonProps {
    href: string
    children?: any;
}

export default function LinkButton(props: LinkButtonProps) {
    return (
        <li key={props.href}>
            <S.LinkButton href={props.href}>{props.children}</S.LinkButton>
        </li>
    )
}