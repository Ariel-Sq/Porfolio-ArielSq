import "../styles/navSections.css";

const sections = [
  {
    id: "inicio",
    label: "Inicio",
    link: "#",
  },
  {
    id: "educacion",
    label: "Educación",
    link: "#",
  },
  {
    id: "proyectos",
    label: "Proyectos",
    link: "#",
  },
  {
    id: "experiencia",
    label: "Experiencia",
    link: "#",
  },
];

export const NavSections = () => {
  return (
    <nav className="nav-cont">
      {sections.map((section) => {
        return (
          <a className="opcion-menu" key={section.id} href={section.link}>
            {section.label}
          </a>
        );
      })}
    </nav>
  );
};
