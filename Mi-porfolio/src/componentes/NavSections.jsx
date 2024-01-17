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
    <nav>
      {sections.map((section) => {
        return (
          <a
            style={{
              marginLeft: 10,
            }}
            key={section.id}
            href={section.link}
          >
            {section.label}
          </a>
        );
      })}
    </nav>
  );
};
