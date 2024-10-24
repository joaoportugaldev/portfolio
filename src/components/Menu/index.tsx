import BotaoLink from "../BotaoLink";
import * as S from "./styles";

export default function Menu() {
  const renderizarItem = (ancora: string, texto: string) => {
    return <BotaoLink href={ancora}>{texto}</BotaoLink>;
  };

  return (
    <S.Menu>
      {renderizarItem("#inicio", "Início")}
      {renderizarItem("#sobre", "Sobre mim")}
      {renderizarItem("#experiencias", "Experiências")}
      {renderizarItem("#projetos", "Projetos")}
      {renderizarItem("#certificacoes", "Certificações")}
      {renderizarItem("#habilidades", "Habilidades")}
    </S.Menu>
  );
}
