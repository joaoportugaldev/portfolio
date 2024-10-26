import LinkButton from "../LinkButton";
import * as S from "./styles";

export default function Menu() {
  const renderizarItem = (anchor: string, text: string) => {
    return <LinkButton href={anchor}>{text}</LinkButton>;
  };

  return (
    <S.Menu>
      {renderizarItem("#home", "Home")}
      {renderizarItem("#about", "About Me")}
      {renderizarItem("#experience", "Experience")}
      {renderizarItem("#projets", "Projects")}
      {renderizarItem("#certificates", "Certificates")}
      {renderizarItem("#skills", "Skills")}
    </S.Menu>
  );
}
