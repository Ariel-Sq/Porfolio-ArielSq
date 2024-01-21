import "../styles/header.css";
import { NavRedes } from "./NavRedes";
import { NavSections } from "./NavSections";

export const Header = () => {
  return (
    <header className="headerCont">
      <h1 className="tittle">Ariel Sq</h1>
      <NavSections />
      <NavRedes />
    </header>
  );
};
