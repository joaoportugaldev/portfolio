import Logo from "../../components/Logo";
import Menu from "../../components/Menu";
import Container from "../Container";
import Navbar from "../Navbar";

export default function Pagina() {
  return (
    <div>
      <Navbar>
      <Container>
        <Logo/>
        <Menu />
      </Container>
      </Navbar>
      <main></main>
      
    </div>
  );
}
