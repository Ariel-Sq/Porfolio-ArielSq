import "../styles/header.css";
import { NavRedes } from "./NavRedes";

export const Header = () => {
  return (
    <header className="headerCont">
      <h1 className="tittle">Ariel Sq</h1>
      <nav className="navList">
        <NavRedes />
      </nav>
    </header>
  );
};
