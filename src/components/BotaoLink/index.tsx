import * as S from './styles'

export interface BotaoLinkProps {
    href: string
    children?: any;
}

export default function BotaoLink(props: BotaoLinkProps) {
    return (
        <li key={props.href}>
            <S.BotaoLink href={props.href}>{props.children}</S.BotaoLink>
        </li>
    )
}