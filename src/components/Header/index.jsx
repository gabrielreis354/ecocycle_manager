import MenuLink from "../MenuLink";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1 className="logoTitle">EcoCycle</h1>
      </div>
      <div className="links">
        <MenuLink to={"/"}>Home</MenuLink>
        <MenuLink to={"/funcionamento"}>Como Funciona</MenuLink>
        <MenuLink to={"/dashboard"}>Dashboard</MenuLink>
      </div>
      {/* <p>Tecnologias para Energia Sustentável e Gerenciamento de Resíduos</p> */}
    </header>
  );
}
