import Logo from "../../components/Logo";
import Menu from "../../components/Menu";
import Navbar from "../Navbar";

export interface PaginaProps {
  children: any;
}

export default function Page(props: PaginaProps) {
  return (
    <>
      <Navbar>
        <Logo />
        <Menu />
      </Navbar>
      <main>{props.children}</main>
    </>
  );
}
