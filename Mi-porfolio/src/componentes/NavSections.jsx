import "../styles/navSections.css";
import { Link } from "react-scroll";

const sections = [
  {
    id: "introCont",
    label: "Home",
    link: "introCont",
  },
  {
    id: "cursos",
    label: "Cursos",
    link: "cursos",
  },
  {
    id: "proyectos",
    label: "Proyectos",
    link: "proyectos",
  },
];

export const NavSections = () => {
  return (
    <nav className="nav-cont">
      {sections.map((section) => {
        return (
          <Link
            className="opcion-menu"
            key={section.id}
            to={section.link}
            smooth={true}
            duration={500}
          >
            {section.label}
          </Link>
        );
      })}
    </nav>
  );
};
